const puppeteer = require('puppeteer');
const Jimp = require('jimp');
const process = require('process');

const LANGUAGES = ['nl', 'en'];
const TRANSLATIONS = {
  'nl': {
    'ADMIN': 'Admin',
    'COURSE_DESCRIPTION_INPUT': 'Welkom op de Dodona-cursus van het opleidingsonderdeel **Programmeren**. Deze cursus ' +
      'bevat een groot aantal Python programmeeroefeningen die voorzien zijn van automatische feedback. De oefeningen ' +
      'zijn per programmeertechniek ingedeeld in tien reeksen.\n\n' +
      'Onderstaand overzicht bevat een lijst van opdrachten die je wekelijks moet afwerken. Dit omvat onder meer de ' +
      'hoofdstukken uit het handboek die als voorbereiding op de hoorcolleges moeten gelezen worden, extra opdrachten ' +
      'als voorbereiding op het oplossen van de programmeeroefeningen, tips & tricks die je kunt gebruiken bij het ' +
      'oplossen van de oefeningen, en een lijst van opgelegde oefeningen die wekelijks moeten ingediend worden voor ' +
      '**dinsdagavond 22:00**. Hou zelf het overzicht in de gaten om te zien voor welke opgelegde oefeningen je reeds ' +
      'een (correcte) oplossing hebt ingediend.\n',
    'COURSE_NAME_INPUT': 'Programmeren',
    'COURSES': 'Cursussen',
    'MY_COURSES': 'Mijn vakken',
  },
  'en': {
    'ADMIN': 'Admin',
    'COURSE_DESCRIPTION_INPUT': 'Welcome to the Dodona page of the **Programming** course. This page contains a number ' +
      'of Python programming assignments with automatic feedback. The assignments are divided by programming technique ' +
      'into ten series.\n\n' +
      'The following overview contains a list of assigments that need to be finished weekly. This includes the chapters ' +
      'from the syllabus that you are required to read as preparation for the lectures, extra assignments as preparation ' +
      'for solving the assignments, tips & tricks you can use to solve the assignments and a list of required exercises' +
      'that need to be submitted weekly before **tuesday evening at 22:00**. Keep an eye on the overview yourself to see ' +
      'for which required exercises you have submitted a (correct) solution.',
    'COURSE_NAME_INPUT': 'Programming',
    'COURSES': 'Courses',
    'MY_COURSES': 'My courses',
  },
};

function Image(path) {
  this.path = path;
  this.load = async function () {
    this.toDrawOn = await Jimp.read(path);
    return this;
  };
  this.drawArrow = async function (x, y) {
    const arrow = await Jimp.read('./arrow.png');
    await this.toDrawOn.composite(arrow, x - 90, y);
  };
  this.close = async function () {
    await this.toDrawOn.write(this.path);
  };
}

function Wizard() {
  this.elementsToBlock = [];

  this.launch = async function () {
    this.browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: 1280, height: 720 });
    return this;
  };

  this.blockElement = function (selector, predicate) {
    this.elementsToBlock.push({ selector, pointPredicate: predicate || (() => true) });
  };

  this.click = async function (selector, predicate, predicateArg) {
    predicate = predicate || (() => true);
    const elements = await this.page.$$(selector);
    for (const element of elements) {
      if (this.page.evaluate(predicate, element, predicateArg)) {
        await element.click();
        return;
      }
    }
    console.warn(`UNUSED CLICK SELECTOR: ${selector}`);
  };

  this.removeBlockedElements = async function () {
    for (const toBlock of this.elementsToBlock) {
      for (const element of await this.page.$$(toBlock.selector)) {
        if (await this.page.evaluate(toBlock.pointPredicate, element)) {
          await this.page.evaluate(elem => {elem.remove();}, element);
        }
      }
    }
  };

  this.navigate = async function (url) {
    await this.page.goto(url);
    await this.removeBlockedElements();
  };

  this.scrollTo = async function (selector) {
    const element = await this.page.$(selector);
    await this.page.evaluate(elem => elem.scrollIntoViewIfNeeded(), element);
  };

  this.scrollToBottom = async function () {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  };

  this.screenshot = async function (savePath, options) {
    options = Object.assign({
      pointToSelectors: [],
      pointPredicate: () => true,
      pointPredicateArg: null,
      cropSelector: null,
      cropPredicate: () => true,
    }, options);

    const locations = [];
    for (const selector of options.pointToSelectors) {
      let used = false;
      for (const element of await this.page.$$(selector)) {
        if (await this.page.evaluate(options.pointPredicate, element, options.pointPredicateArg)) {
          const boxModel = await element.boxModel();
          // Make sure element is visible
          if (boxModel !== null) {
            locations.push(boxModel.content);
            used = true;
          }
        }
      }
      if (!used) {
        console.warn(`UNUSED SELECTOR: ${selector}`);
      }
    }

    let clip = undefined;
    if (options.cropSelector) {
      let found = 0;
      for (const element of await this.page.$$(options.cropSelector)) {
        if (await this.page.evaluate(options.cropPredicate, element)) {
          const box = await element.boxModel();
          if (box !== null) {
            clip = {
              x: box.content[0].x,
              y: box.content[0].y,
              width: box.content[1].x - box.content[0].x,
              height: box.content[3].y - box.content[0].y,
            };
            found++;
          }
        }
      }
      if (found === 0) {
        console.warn(`UNUSED CROP SELECTOR: ${options.cropSelector}`);
      } else if (found > 1) {
        console.warn(`CROP SELECTOR OCCURED ${found} TIMES: ${options.cropSelector}`);
      }
    }

    await this.page.screenshot({ path: savePath, clip });

    const image = await new Image(savePath).load();
    for (const location of locations) {
      await image.drawArrow(location[3].x, location[3].y);
    }
    await image.close();
  };

  this.press = async function (selector, key) {
    const element = await this.page.$(selector);
    await element.press(key);
  };

  this.typeIn = async function (selector, text) {
    await this.page.type(selector, text);
  };

  this.close = async function () {
    await this.browser.close();
  };
}

async function waitForInput() {
  await new Promise(((resolve) => {
    process.stdin.resume();
    process.stdin.once('data', function (data) {
      resolve(data);
      process.stdin.pause();
    });
  }));
}

async function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

(async () => {
  console.log('Make sure Dodona is running locally on port 3000 with a clean database\n' +
    'and the production stylesheet and that the user is logged in by default (as admin).\n' +
    'Press ENTER to continue');
  await waitForInput();

  const wizard = await new Wizard().launch();
  wizard.blockElement('div.alert-info', elem => {
    return !!elem.querySelector('a[href$="stop_impersonating/"');
  });
  wizard.blockElement('footer.footer');

  // =========================================================
  // SIGNED OUT
  // =========================================================

  console.log('signed out pages');

  for (const language of LANGUAGES) {
    await wizard.navigate(`https://dodona.ugent.be/${language}`);
    await wizard.screenshot(`../images/landingpage.${language}.png`);
    await wizard.screenshot(`../images/login.${language}.png`, { pointToSelectors: [`a[href="/${language}/sign_in/"]`] });

    await wizard.click('li.dropdown', elem => !!elem.querySelector('span.glyphicon-globe'));
    await wait(100);
    await wizard.screenshot(`../images/choose_language.${language}.png`, { pointToSelectors: ['ul.dropdown-menu'] });

    await wizard.navigate(`https://dodona.ugent.be/${language}/sign_in`);
    await wizard.screenshot(`../images/institution.${language}.png`);

    await wizard.navigate(`https://dodona.ugent.be/${language}/contact/`);
    await wizard.screenshot(`../images/contact.${language}.png`);
  }

  // =========================================================
  // STAFF
  // =========================================================

  await wizard.navigate('http://localhost:3000/nl/users/2/impersonate');

  console.log(`staff user management`);

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/`);

    await wizard.screenshot(`../images/staff.admin_menu.${language}.png`, {
      pointToSelectors: [`a.dropdown-toggle`],
      pointPredicate: (elem, content) => elem.innerText === content + ' ',
      pointPredicateArg: TRANSLATIONS[language]['ADMIN'],
    });

    await wizard.click('li.dropdown',
      (elem, content) =>
        !!elem.querySelector('a.dropdown-toggle') && elem.querySelector('a.dropdown-toggle').innerText === content + ' ',
      TRANSLATIONS[language]['ADMIN'],
    );

    await wizard.screenshot(`../images/staff.admin_menu_users.${language}.png`, {
      pointToSelectors: [`a[href$="/users/"]`],
    });

    await wizard.navigate(`http://localhost:3000/${language}/users/`);

    await wizard.screenshot(`../images/staff.users.${language}.png`);

    await wizard.typeIn(`input#filter-query`, 'rebecca');

    await wait(2000);

    await wizard.screenshot(`../images/staff.users_filtered.${language}.png`);
    await wizard.screenshot(`../images/staff.users_filtered_link.${language}.png`, {
      pointToSelectors: [`a[href$="/users/3/"]`],
    });
    await wizard.screenshot(`../images/staff.users_filtered_edit_link.${language}.png`, {
      pointToSelectors: [`a[href$="/users/3/edit/"]`],
    });

    await wizard.navigate(`http://localhost:3000/${language}/users/3/`);
    await wizard.screenshot(`../images/staff.user_edit_link.${language}.png`, {
      pointToSelectors: [`a[href$="/users/3/edit/"]`],
    });

    await wizard.navigate(`http://localhost:3000/${language}/users/3/edit/`);

    await wizard.screenshot(`../images/staff.user_edit_permission.${language}.png`, {
      pointToSelectors: ['select#user_permission'],
    });
  }

  await wizard.navigate(`http://localhost:3000/nl/users/`);
  await wizard.page.evaluate(() => {
    document.querySelector('body').innerHTML =
      '<p><span class="glyphicon glyphicon-king"></span></p>' +
      '<p><span class="glyphicon glyphicon-queen"></span></p>';
  });

  await wizard.screenshot('../images/role_icons/zeus.png', { cropSelector: '.glyphicon-king' });
  await wizard.screenshot('../images/role_icons/staff.png', { cropSelector: '.glyphicon-queen' });

  console.log('staff course management');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/courses/`);

    await wizard.screenshot(`../images/staff.courses_new_link.${language}.png`, {
      pointToSelectors: ['a[href$="/courses/new/"]'],
    });

    await wizard.navigate(`http://localhost:3000/${language}/courses/new/`);

    await wizard.screenshot(`../images/staff.new_course.${language}.png`);

    await wizard.typeIn('input#course_name', TRANSLATIONS[language]['COURSE_NAME_INPUT']);
    await wizard.typeIn('input#course_teacher', 'Laura Esgever');
    await wizard.typeIn('textarea#course_description', TRANSLATIONS[language]['COURSE_DESCRIPTION_INPUT']);

    await wizard.click(`button[form="new_course"]`);
    await wizard.page.waitForNavigation();
    await wizard.removeBlockedElements();

    const course_url = wizard.page.target().url();

    await wizard.screenshot(`../images/staff.created_course.${language}.png`);

    await wizard.navigate(course_url + 'edit/');

    await wizard.screenshot(`../images/staff.course_edit.${language}.png`);
  }

  // =========================================================
  // STUDENT
  // =========================================================

  await wizard.navigate('http://localhost:3000/nl/users/3/impersonate');

  console.log('homepage');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/?locale=${language}`);

    await wizard.screenshot(`../images/student.homepage.${language}.png`);

    await wizard.screenshot(`../images/student.navigate_to_homepage.${language}.png`, {
      pointToSelectors: ['a.navbar-brand'],
    });

    await wizard.screenshot(`../images/student.explore_courses.${language}.png`, {
      pointToSelectors: ['a[href$="/courses/"]'],
    });

    await wizard.click('li.dropdown', elem => !!elem.querySelector('a[href*="/users/sign_out/"]'));
    await wizard.screenshot(`../images/student.user_menu.${language}.png`, {
      pointToSelectors: ['li.dropdown ul.dropdown-menu'],
      pointPredicate: elem => !!elem.querySelector('a[href*="/users/sign_out/"]'),
    });

    await wizard.screenshot(`../images/student.user_menu_my_profile.${language}.png`, {
      pointToSelectors: ['li.dropdown ul.dropdown-menu a[href$="/users/3/"]'],
    });

    await wizard.screenshot(`../images/student.sign_out.${language}.png`, {
      pointToSelectors: ['a[href*="/users/sign_out/"]'],
    });

  }

  console.log('profile');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/users/3/`);
    await wizard.screenshot(`../images/student.edit_profile.${language}.png`, {
      pointToSelectors: ['a[href$="/users/3/edit/"]'],
      pointPredicate: elem => !!elem.querySelector('span.glyphicon-pencil'),
    });

    await wizard.navigate(`http://localhost:3000/${language}/users/3/edit/`);
    await wizard.screenshot(`../images/student.edit_timezone.${language}.png`, { pointToSelectors: ['select#user_time_zone'] });
  }

  await wizard.page.evaluate(() => {
    document.querySelector('select#user_time_zone').value = 'Seoul';
  });

  await wizard.click('button.btn-primary[form*="edit_user_"]');
  await wait(1000);
  await wizard.navigate('http://localhost:3000/?locale=nl');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/?locale=${language}`);
    await wizard.screenshot(`../images/student.wrong_timezone.${language}.png`);
  }

  await wizard.navigate(`http://localhost:3000/nl/users/3/edit/`);
  await wizard.page.evaluate(() => {
    document.querySelector('select#user_time_zone').value = 'Brussels';
  });
  await wizard.click('button.btn-primary[form*="edit_user_"]');
  await wait(1000);
  await wizard.navigate('http://localhost:3000/?locale=nl');

  console.log('courses');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/courses/`);
    await wizard.screenshot(`../images/student.courses.${language}.png`);

    await wizard.navigate(`http://localhost:3000/${language}/courses/1/`);
    await wizard.screenshot(`../images/student.course.${language}.png`);

    await wizard.screenshot(`../images/register.${language}.png`, {
      cropSelector: ['div.col-sm-6.col-xs-12 div.card'],
      cropPredicate: elem => !!elem.querySelector('a[href$="/courses/1/subscribe/"]'),
    });
  }

  await wizard.navigate('http://localhost:3000/nl/courses/1/subscribe');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/courses/1/`);
    await wizard.screenshot(`../images/student.unregister.${language}.png`, {
      pointToSelectors: ['form[action$="/courses/1/unsubscribe/"] input[type="submit"]'],
    });

    await wizard.navigate(`http://localhost:3000/${language}/courses/2/`);
    await wizard.screenshot(`../images/moderated_register.${language}.png`, {
      cropSelector: ['div.col-sm-6.col-xs-12 div.card'],
      cropPredicate: elem => !!elem.querySelector('a[href$="/courses/2/subscribe/"]'),
    });
  }

  await wizard.navigate('http://localhost:3000/nl/courses/2/subscribe');

  for (const language of LANGUAGES) {

    await wizard.navigate(`http://localhost:3000/${language}/courses/2/`);
    await wizard.screenshot(`../images/moderated_waiting.${language}.png`, {
      cropSelector: ['div.col-sm-6.col-xs-12 div.card'],
      cropPredicate: elem => !!elem.querySelector('p'),
    });

    await wizard.navigate(`http://localhost:3000/${language}/courses/4/`);
    await wizard.screenshot(`../images/closed_registration.${language}.png`, {
      cropSelector: ['div.col-sm-6.col-xs-12 div.card'],
      cropPredicate: elem => !!elem.querySelector('p'),
    });

    await wizard.navigate(`http://localhost:3000/?locale=${language}`);
    await wizard.screenshot(`../images/student.homepage_after_registration.${language}.png`);

    await wizard.click('li.dropdown', elem => !!elem.querySelector('a[href*="/users/sign_out/"]'));
    await new Promise(resolve => setTimeout(resolve, 1000));
    await wizard.screenshot(`../images/student.my_courses.${language}.png`, {
      pointToSelectors: ['li.dropdown-header'],
      pointPredicate: (elem, content) => elem.textContent === content,
      pointPredicateArg: TRANSLATIONS[language]['MY_COURSES'],
    });

    await wizard.navigate(`http://localhost:3000/${language}/users/3/`);
    await wizard.screenshot(`../images/student.profile_courses.${language}.png`, {
      pointToSelectors: ['p'],
      pointPredicate: (elem, content) => elem.innerText === (content + ':'),
      pointPredicateArg: TRANSLATIONS[language]['COURSES'],
    });
  }

  console.log('exercises');

  await wizard.navigate('http://localhost:3000/nl/courses/1/');
  const exerciseNamesToIDs = await wizard.page.evaluate(() => {
    const table = document.querySelector('.exercise-table');
    const exercise_links = table.querySelectorAll('a[href*="courses/1/exercises/"]');
    const result = {};
    for (const link of exercise_links) {
      const parts = link.href.split('/').filter(s => s.length > 0);
      result[link.textContent] = parts[parts.length - 1];
    }
    return result;
  });

  let submissions = 0;
  for (const language of LANGUAGES) {
    await wizard.navigate('http://localhost:3000/nl/courses/1/');
    await wizard.screenshot(`../images/student.course_exercise_selection.${language}.png`, {
      pointToSelectors: [`a[href$="/exercises/${exerciseNamesToIDs['ISBN']}/"]`],
      pointPredicate: () => {
        if (!document.first) {
          document.first = true;
          return true;
        }
        return false;
      },
    });

    await wizard.navigate(`http://localhost:3000/${language}/courses/1/exercises/${exerciseNamesToIDs['ISBN']}/`);
    await wait(200);
    await wizard.screenshot(`../images/student.exercise_start.${language}.png`);

    await wizard.scrollToBottom();
    await wizard.typeIn('textarea.ace_text-input', 's = 0\n' +
      'for i in range(1, 10):\n' +
      's += i * int(input())\n');
    await wizard.press('textarea.ace_text-input', 'Backspace');
    await wizard.typeIn('textarea.ace_text-input', 'print(s % 11)');

    await wizard.screenshot(`../images/student.exercise_before_submit.${language}.png`, {
      pointToSelectors: ['#editor-process-btn'],
    });

    await wizard.click('#editor-process-btn');
    await wait(20000);
    submissions++;

    await wizard.screenshot(`../images/student.exercise_feedback_correct_tab.${language}.png`);

    await wizard.click('a#exercise-submission-link');
    await wait(1000);

    await wizard.screenshot(`../images/student.exercise_submissions_tab.${language}.png`, {
      pointToSelectors: ['a#exercise-submission-link'],
    });

    await wizard.navigate(`http://localhost:3000/${language}/submissions/${submissions}/`);
    await wizard.screenshot(`../images/student.exercise_feedback_correct_page.${language}.png`);

    await wizard.navigate(`http://localhost:3000/${language}/courses/1/exercises/${exerciseNamesToIDs['Echo']}/`);
    await wizard.typeIn('textarea.ace_text-input', 'print(input() + "incorrect")');

    await wizard.click('#editor-process-btn');
    await wait(20000);
    submissions++;

    await wizard.screenshot(`../images/student.exercise_feedback_incorrect_tab.${language}.png`);

    await wizard.navigate(`http://localhost:3000/${language}/courses/1/`);
    await wizard.screenshot(`../images/student.deadline_series.${language}.png`);

    await wizard.navigate(`http://localhost:3000/?locale=${language}`);
    await wizard.screenshot(`../images/student.course_submissions.${language}.png`, {
      pointToSelectors: ['a[href*="submissions/?course_id="]'],
    });

    await wizard.screenshot(`../images/student.exercise_all_submissions_page.${language}.png`, {
      pointToSelectors: [`a[href="/${language}/exercises/${exerciseNamesToIDs['Echo']}/submissions/"]`],
    });

    await wizard.click('li.dropdown', elem => !!elem.querySelector('a[href*="/users/sign_out/"]'));
    await wizard.screenshot(`../images/student.all_submissions_link.${language}.png`, {
      pointToSelectors: [`a[href="/${language}/submissions/"]`],
    });

    await wizard.navigate(`http://localhost:3000/${language}/courses/1/`);
    await wizard.screenshot(`../images/student.exercise_course_submissions_page.${language}.png`, {
      pointToSelectors: [`a[href*="/exercises/${exerciseNamesToIDs['ISBN']}/submissions/"]`],
      pointPredicate: () => {
        if (!document.first) {
          document.first = true;
          return true;
        }
        return false;
      },
    });

    await wizard.navigate(`http://localhost:3000/${language}/submissions/`);
    await wizard.screenshot(`../images/student.all_submissions.${language}.png`);

    await wizard.screenshot(`../images/student.submissions_to_exercise_feedback.${language}.png`, {
      pointToSelectors: ['a[href$="/submissions/1/"]'],
    });
  }

  await wizard.navigate(`http://localhost:3000/en/courses/1/exercises/${exerciseNamesToIDs['ISBN']}/`);

  await wizard.scrollToBottom();
  await wizard.typeIn('textarea.ace_text-input', 's = 0\n' +
    'for i in range(1, 10):\n' +
    's += i * int(input())\n');
  await wizard.press('textarea.ace_text-input', 'Backspace');
  await wizard.typeIn('textarea.ace_text-input', 'print(8)');

  await wizard.click('#editor-process-btn');
  await wait(20000);

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/courses/1/`);
    await wizard.screenshot(`../images/student.deadline_series_warning.${language}.png`);
  }

  await wizard.navigate('http://localhost:3000/nl/submissions');
  await wizard.page.evaluate(() => {
    document.querySelector('body').innerHTML =
      '<p><span class="submission-status glyphicon glyphicon-minus colored-default"></span></p>' +
      '<p><span class="submission-status glyphicon glyphicon-ok colored-correct"></span></p>' +
      '<p><span class="submission-status glyphicon glyphicon-remove colored-wrong"></span></p>' +
      '<p><span class="submission-status glyphicon glyphicon-time colored-wrong"></span></p>' +
      '<p><span class="submission-status glyphicon glyphicon-hourglass colored-default"></span></p>' +
      '<p><span class="submission-status glyphicon glyphicon-flash colored-wrong"></span></p>' +
      '<p><span class="submission-status glyphicon glyphicon-wrench colored-wrong"></span></p>' +
      '<p><span class="submission-status glyphicon glyphicon-hdd colored-wrong"></span></p>' +
      '<p><span class="submission-status glyphicon glyphicon-alert colored-warning"></span></p>';
  });

  await wizard.screenshot('../images/submission_icons/default.png', { cropSelector: '.glyphicon-minus' });
  await wizard.screenshot('../images/submission_icons/correct.png', { cropSelector: '.glyphicon-ok' });
  await wizard.screenshot('../images/submission_icons/wrong.png', { cropSelector: '.glyphicon-remove' });
  await wizard.screenshot('../images/submission_icons/time_limit_exceeded.png', { cropSelector: '.glyphicon-time' });
  await wizard.screenshot('../images/submission_icons/running.png', { cropSelector: '.glyphicon-hourglass' });
  await wizard.screenshot('../images/submission_icons/queued.png', { cropSelector: '.glyphicon-hourglass' });
  await wizard.screenshot('../images/submission_icons/runtime_error.png', { cropSelector: '.glyphicon-flash' });
  await wizard.screenshot('../images/submission_icons/compilation_error.png', { cropSelector: '.glyphicon-wrench' });
  await wizard.screenshot('../images/submission_icons/memory_limit_exceeded.png', { cropSelector: '.glyphicon-hdd' });
  await wizard.screenshot('../images/submission_icons/internal_error.png', { cropSelector: '.glyphicon-alert' });

  await wizard.close();
})();