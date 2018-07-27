const puppeteer = require('puppeteer');
const Jimp = require('jimp');
const process = require('process');

const LANGUAGES = ['nl', 'en'];
const TRANSLATIONS = {
  'nl': {
    'MY_COURSES': 'Mijn vakken',
  },
  'en': {
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

  this.click = async function (selector) {
    const element = await this.page.$(selector);
    element.click();
  };

  this.navigate = async function (url) {
    await this.page.goto(url);
    for (const toBlock of this.elementsToBlock) {
      for (const element of await this.page.$$(toBlock.selector)) {
        if (await this.page.evaluate(toBlock.pointPredicate, element)) {
          await this.page.evaluate(elem => {elem.remove();}, element);
        }
      }
    }
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
          const box = await element.boundingBox();
          if (box !== null) {
            clip = box;
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
    const element = await this.page.$(selector);
    await element.type(text);
  };

  this.close = async function () {
    await this.browser.close();
  };

  this.click = async function (selector, predicate) {
    predicate = predicate || (() => true);

    for (const element of await this.page.$$(selector)) {
      if (await this.page.evaluate(predicate, element)) {
        element.click();
      }
    }
  };
}

function waitForInput() {
  return new Promise(((resolve) => {
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

  console.log('signed out pages');

  for (const language of LANGUAGES) {
    await wizard.navigate(`https://dodona.ugent.be/${language}`);
    await wizard.screenshot(`../for_students/landingpage.${language}.png`);
    await wizard.screenshot(`../for_students/login.${language}.png`, { pointToSelectors: [`a[href="/${language}/sign_in/"]`] });

    await wizard.click('li.dropdown', elem => !!elem.querySelector('span.glyphicon-globe'));
    await wait(20);
    await wizard.screenshot(`../for_students/choose_language.${language}.png`, { pointToSelectors: ['ul.dropdown-menu'] });

    await wizard.navigate(`https://dodona.ugent.be/${language}/sign_in`);
    await wizard.screenshot(`../for_students/institution.${language}.png`);

    await wizard.navigate(`https://dodona.ugent.be/${language}/contact/`);
    await wizard.screenshot(`../for_students/contact.${language}.png`);
  }

  await wizard.navigate('http://localhost:3000/nl/users/3/impersonate');

  console.log('homepage');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/?locale=${language}`);

    await wizard.screenshot(`../for_students/homepage.${language}.png`);

    await wizard.screenshot(`../for_students/navigate_to_homepage.${language}.png`, {
      pointToSelectors: ['a.navbar-brand'],
    });

    await wizard.screenshot(`../for_students/explore_courses.${language}.png`, {
      pointToSelectors: ['a[href$="/courses/"]'],
    });

    await wizard.click('li.dropdown', elem => !!elem.querySelector('a[href*="/users/sign_out/"]'));
    await wizard.screenshot(`../for_students/user_menu.${language}.png`, {
      pointToSelectors: ['li.dropdown ul.dropdown-menu'],
      pointPredicate: elem => !!elem.querySelector('a[href*="/users/sign_out/"]'),
    });

    await wizard.screenshot(`../for_students/sign_out.${language}.png`, {
      pointToSelectors: ['a[href*="/users/sign_out/"]'],
    });

  }

  console.log('profile');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/users/3/`);
    await wizard.screenshot(`../for_students/edit_profile.${language}.png`, {
      pointToSelectors: ['a[href$="/users/3/edit/"]'],
      pointPredicate: elem => !!elem.querySelector('span.glyphicon-pencil'),
    });

    await wizard.navigate(`http://localhost:3000/${language}/users/3/edit/`);
    await wizard.screenshot(`../for_students/edit_timezone.${language}.png`, { pointToSelectors: ['select#user_time_zone'] });
  }

  await wizard.page.evaluate(() => {
    document.querySelector('select#user_time_zone').value = 'Seoul';
  });

  await wizard.click('button.btn-primary[form*="edit_user_"]');
  await wait(200);

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/?locale=${language}`);
    await wizard.screenshot(`../for_students/wrong_timezone.${language}.png`);
  }

  await wizard.navigate(`http://localhost:3000/nl/users/3/edit/`);
  await wizard.page.evaluate(() => {
    document.querySelector('select#user_time_zone').value = 'Brussels';
  });
  await wizard.click('button.btn-primary[form*="edit_user_"]');
  await wait(200);

  console.log('courses');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/courses/`);
    await wizard.screenshot(`../for_students/courses.${language}.png`);

    await wizard.navigate(`http://localhost:3000/${language}/courses/1/`);
    await wizard.screenshot(`../for_students/course.${language}.png`);

    await wizard.screenshot(`../for_students/register.${language}.png`, {
      cropSelector: ['div.col-sm-6.col-xs-12'],
      cropPredicate: elem => !!elem.querySelector('a[href$="/courses/1/subscribe/"]'),
    });
  }

  await wizard.navigate('http://localhost:3000/nl/courses/1/subscribe');

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/courses/1/`);
    await wizard.screenshot(`../for_students/unregister.${language}.png`, {
      pointToSelectors: ['form[action$="/courses/1/unsubscribe/"] input[type="submit"]'],
    });

    await wizard.navigate(`http://localhost:3000/${language}/courses/2/`);
    await wizard.screenshot(`../for_students/moderated_register.${language}.png`, {
      cropSelector: ['div.col-sm-6.col-xs-12'],
      cropPredicate: elem => !!elem.querySelector('a[href$="/courses/2/subscribe/"]'),
    });
  }

  await wizard.navigate('http://localhost:3000/nl/courses/2/subscribe');

  for (const language of LANGUAGES) {

    await wizard.navigate(`http://localhost:3000/${language}/courses/2/`);
    await wizard.screenshot(`../for_students/moderated_waiting.${language}.png`, {
      cropSelector: ['div.col-sm-6.col-xs-12'],
      cropPredicate: elem => !!elem.querySelector('div.card') && !!elem.querySelector('div.card').querySelector('p'),
    });

    await wizard.navigate(`http://localhost:3000/${language}/courses/4/`);
    await wizard.screenshot(`../for_students/closed_registration.${language}.png`, {
      cropSelector: ['div.col-sm-6.col-xs-12'],
      cropPredicate: elem => !!elem.querySelector('div.card') && !!elem.querySelector('div.card').querySelector('p'),
    });

    await wizard.navigate(`http://localhost:3000/?locale=${language}`);
    await wizard.screenshot(`../for_students/homepage_after_registration.${language}.png`);

    await wizard.click('li.dropdown', elem => !!elem.querySelector('a[href*="/users/sign_out/"]'));
    await new Promise(resolve => setTimeout(resolve, 1000));
    await wizard.screenshot(`../for_students/my_courses.${language}.png`, {
      pointToSelectors: ['li.dropdown-header'],
      pointPredicate: (elem, content) => elem.textContent === content,
      pointPredicateArg: TRANSLATIONS[language]['MY_COURSES'],
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
    await wizard.navigate(`http://localhost:3000/${language}/courses/1/exercises/${exerciseNamesToIDs['ISBN']}/`);
    await wizard.screenshot(`../for_students/exercise_start.${language}.png`);

    await wizard.scrollToBottom();
    await wizard.typeIn('textarea.ace_text-input', 's = 0\n' +
      'for i in range(1, 10):\n' +
      's += i * int(input())\n');
    await wizard.press('textarea.ace_text-input', 'Backspace');
    await wizard.typeIn('textarea.ace_text-input', 'print(s % 11)');

    await wizard.screenshot(`../for_students/exercise_before_submit.${language}.png`, {
      pointToSelectors: ['#editor-process-btn'],
    });

    await wizard.click('#editor-process-btn');
    await wait(5000);
    submissions++;

    await wizard.screenshot(`../for_students/exercise_feedback_correct_tab.${language}.png`);

    await wizard.navigate(`http://localhost:3000/${language}/submissions/${submissions}/`);
    await wizard.screenshot(`../for_students/exercise_feedback_correct_page.${language}.png`);

    await wizard.navigate(`http://localhost:3000/${language}/courses/1/exercises/${exerciseNamesToIDs['Echo']}/`);
    await wizard.typeIn('textarea.ace_text-input', 'print(input() + "incorrect")');

    await wizard.click('#editor-process-btn');
    await wait(5000);
    submissions++;

    await wizard.screenshot(`../for_students/exercise_feedback_incorrect_tab.${language}.png`);

    await wizard.navigate(`http://localhost:3000/${language}/courses/1/`);
    await wizard.screenshot(`../for_students/deadline_series.${language}.png`);
  }

  await wizard.navigate(`http://localhost:3000/en/courses/1/exercises/${exerciseNamesToIDs['ISBN']}/`);

  await wizard.scrollToBottom();
  await wizard.typeIn('textarea.ace_text-input', 's = 0\n' +
    'for i in range(1, 10):\n' +
    's += i * int(input())\n');
  await wizard.press('textarea.ace_text-input', 'Backspace');
  await wizard.typeIn('textarea.ace_text-input', 'print(8)');

  await wizard.click('#editor-process-btn');
  await wait(5000);

  for (const language of LANGUAGES) {
    await wizard.navigate(`http://localhost:3000/${language}/courses/1/`);
    await wizard.screenshot(`../for_students/deadline_series_warning.${language}.png`);
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

  await wizard.screenshot('../for_students/submission_icons/default.png', { cropSelector: '.glyphicon-minus' });
  await wizard.screenshot('../for_students/submission_icons/correct.png', { cropSelector: '.glyphicon-ok' });
  await wizard.screenshot('../for_students/submission_icons/wrong.png', { cropSelector: '.glyphicon-remove' });
  await wizard.screenshot('../for_students/submission_icons/time_limit_exceeded.png', { cropSelector: '.glyphicon-time' });
  await wizard.screenshot('../for_students/submission_icons/running.png', { cropSelector: '.glyphicon-hourglass' });
  await wizard.screenshot('../for_students/submission_icons/queued.png', { cropSelector: '.glyphicon-hourglass' });
  await wizard.screenshot('../for_students/submission_icons/runtime_error.png', { cropSelector: '.glyphicon-flash' });
  await wizard.screenshot('../for_students/submission_icons/compilation_error.png', { cropSelector: '.glyphicon-wrench' });
  await wizard.screenshot('../for_students/submission_icons/memory_limit_exceeded.png', { cropSelector: '.glyphicon-hdd' });
  await wizard.screenshot('../for_students/submission_icons/internal_error.png', { cropSelector: '.glyphicon-alert' });

  await wizard.close();
})();