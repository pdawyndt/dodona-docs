const puppeteer = require('puppeteer');
const Jimp = require('jimp');
const process = require('process');

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
    this.elementsToBlock.push({ selector, predicate: predicate || (() => true) });
  };

  this.click = async function (selector) {
    const element = await this.page.$(selector);
    element.click();
  };

  this.navigate = async function (url) {
    await this.page.goto(url);
    for (const toBlock of this.elementsToBlock) {
      for (const element of await this.page.$$(toBlock.selector)) {
        if (await this.page.evaluate(toBlock.predicate, element)) {
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

  this.screenshot = async function (savePath, elementSelectors, predicate) {
    elementSelectors = elementSelectors || [];
    predicate = predicate || (() => true);

    await this.page.screenshot({ path: savePath });
    const locations = [];
    for (const selector of elementSelectors) {
      var used = false;
      for (const element of await this.page.$$(selector)) {
        if (await this.page.evaluate(predicate, element)) {
          const boxModel = await element.boxModel();
          // Make sure element is visible
          if (boxModel !== null) {
            locations.push(boxModel.content);
            used = true;
          }
        }
      }
      if (!used) {
        console.trace(`UNUSED SELECTOR: ${selector}`);
      }
    }
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

  await wizard.navigate('https://dodona.ugent.be/nl');
  await wizard.screenshot('../for_students/landingpage.nl.png');
  await wizard.screenshot('../for_students/login.nl.png', ['a[href="/nl/sign_in/"]']);

  await wizard.click('li.dropdown', elem => !!elem.querySelector('span.glyphicon-globe'));
  await wizard.screenshot('../for_students/choose_language.nl.png', ['ul.dropdown-menu']);

  await wizard.navigate('https://dodona.ugent.be/nl/sign_in');
  await wizard.screenshot('../for_students/institution.nl.png', []);

  await wizard.navigate('https://dodona.ugent.be/en');
  await wizard.screenshot('../for_students/landingpage.en.png');
  await wizard.screenshot('../for_students/login.en.png', ['a[href="/en/sign_in/"]']);

  await wizard.click('li.dropdown', elem => !!elem.querySelector('span.glyphicon-globe'));
  await wizard.screenshot('../for_students/choose_language.en.png', ['ul.dropdown-menu']);

  await wizard.navigate('https://dodona.ugent.be/en/sign_in');
  await wizard.screenshot('../for_students/institution.en.png', []);

  await wizard.navigate('https://dodona.ugent.be/nl/contact/');
  await wizard.screenshot('../for_students/contact.nl.png');

  await wizard.navigate('https://dodona.ugent.be/en/contact/');
  await wizard.screenshot('../for_students/contact.en.png');

  await wizard.navigate('http://localhost:3000/nl/users/3/impersonate');

  await wizard.screenshot('../for_students/homepage.nl.png');

  await wizard.screenshot('../for_students/navigate_to_homepage.nl.png', ['a.navbar-brand']);

  await wizard.screenshot('../for_students/explore_courses.nl.png', ['a[href$="/courses/"]']);

  await wizard.click('li.dropdown', elem => !!elem.querySelector('a[href*="/users/sign_out/"]'));
  await wizard.screenshot(
    '../for_students/user_menu.nl.png',
    ['li.dropdown ul.dropdown-menu'],
    elem => !!elem.querySelector('a[href*="/users/sign_out/"]'),
  );

  await wizard.screenshot('../for_students/sign_out.nl.png', ['a[href*="/users/sign_out/"]']);

  await wizard.navigate('http://localhost:3000/?locale=en');

  await wizard.screenshot('../for_students/homepage.en.png');

  await wizard.screenshot('../for_students/navigate_to_homepage.en.png', ['a.navbar-brand']);

  await wizard.screenshot('../for_students/explore_courses.en.png', ['a[href$="/courses/"]']);

  await wizard.click('li.dropdown', elem => !!elem.querySelector('a[href*="/users/sign_out/"]'));
  await wizard.screenshot(
    '../for_students/user_menu.en.png',
    ['li.dropdown ul.dropdown-menu'],
    elem => !!elem.querySelector('a[href*="/users/sign_out/"]'),
  );

  await wizard.screenshot('../for_students/sign_out.en.png', ['a[href*="/users/sign_out/"]']);

  await wizard.navigate('http://localhost:3000/nl/users/3/');
  await wizard.screenshot(
    '../for_students/edit_profile.nl.png',
    ['a[href$="/users/3/edit/"]'],
    elem => !!elem.querySelector('span.glyphicon-pencil'),
  );

  await wizard.navigate('http://localhost:3000/en/users/3/');
  await wizard.screenshot(
    '../for_students/edit_profile.en.png',
    ['a[href$="/users/3/edit/"]'],
    elem => !!elem.querySelector('span.glyphicon-pencil'),
  );

  await wizard.navigate('http://localhost:3000/nl/users/3/edit/');
  await wizard.screenshot(
    '../for_students/edit_timezone.nl.png',
    ['select#user_time_zone'],
  );

  await wizard.navigate('http://localhost:3000/en/users/3/edit/');
  await wizard.screenshot(
    '../for_students/edit_timezone.en.png',
    ['select#user_time_zone'],
  );

  await wizard.page.evaluate(() => {
    document.querySelector('select#user_time_zone').value = "Seoul";
  });

  await wizard.click('button.btn-primary[form*="edit_user_"]');

  await new Promise(resolve => setTimeout(resolve, 1000));

  await wizard.navigate('http://localhost:3000/?locale=nl');
  await wizard.screenshot('../for_students/wrong_timezone.nl.png');

  await wizard.navigate('http://localhost:3000/?locale=en');
  await wizard.screenshot('../for_students/wrong_timezone.en.png');

  await wizard.navigate('http://localhost:3000/en/users/3/edit/');
  await wizard.page.evaluate(() => {
    document.querySelector('select#user_time_zone').value = "Brussels";
  });
  await wizard.click('button.btn-primary[form*="edit_user_"]');
  await new Promise(resolve => setTimeout(resolve, 1000));

  await wizard.navigate('http://localhost:3000/nl/courses/');
  await wizard.screenshot('../for_students/courses.nl.png');

  await wizard.navigate('http://localhost:3000/en/courses/');
  await wizard.screenshot('../for_students/courses.en.png');

  await wizard.navigate('http://localhost:3000/nl/courses/1/');
  await wizard.screenshot('../for_students/course.nl.png');

  await wizard.screenshot('../for_students/register.nl.png', ['a[href$="/courses/1/subscribe/"]']);

  await wizard.navigate('http://localhost:3000/en/courses/1/');
  await wizard.screenshot('../for_students/course.en.png');

  await wizard.screenshot('../for_students/register.en.png', ['a[href$="/courses/1/subscribe/"]']);

  await wizard.navigate('http://localhost:3000/nl/courses/1/subscribe');

  await wizard.navigate('http://localhost:3000/nl/courses/1/');
  await wizard.screenshot('../for_students/unregister.nl.png', ['form[action$="/courses/1/unsubscribe/"] input[type="submit"]']);

  await wizard.navigate('http://localhost:3000/en/courses/1/');
  await wizard.screenshot('../for_students/unregister.en.png', ['form[action$="/courses/1/unsubscribe/"] input[type="submit"]']);

  await wizard.navigate('http://localhost:3000/nl/courses/2/');
  await wizard.screenshot('../for_students/moderated_register.nl.png', ['a[href$="/courses/2/subscribe/"]']);

  await wizard.navigate('http://localhost:3000/en/courses/2/');
  await wizard.screenshot('../for_students/moderated_register.en.png', ['a[href$="/courses/2/subscribe/"]']);

  await wizard.navigate('http://localhost:3000/nl/courses/2/subscribe');

  await wizard.navigate('http://localhost:3000/nl/courses/2/');
  await wizard.screenshot('../for_students/moderated_waiting.nl.png');

  await wizard.navigate('http://localhost:3000/en/courses/2/');
  await wizard.screenshot('../for_students/moderated_waiting.en.png');

  await wizard.navigate('http://localhost:3000/nl/courses/4/');
  await wizard.screenshot('../for_students/closed_registration.nl.png');

  await wizard.navigate('http://localhost:3000/en/courses/4/');
  await wizard.screenshot('../for_students/closed_registration.en.png');

  await wizard.navigate('http://localhost:3000/?locale=nl');
  await wizard.screenshot('../for_students/homepage_after_registration.nl.png');

  await wizard.click('li.dropdown', elem => !!elem.querySelector('a[href*="/users/sign_out/"]'));
  await wizard.screenshot('../for_students/my_courses.nl.png', ['li.dropdown-header'], elem => elem.textContent === 'Mijn vakken');

  await wizard.navigate('http://localhost:3000/?locale=en');
  await wizard.screenshot('../for_students/homepage_after_registration.en.png');

  await wizard.click('li.dropdown', elem => !!elem.querySelector('a[href*="/users/sign_out/"]'));
  await wizard.screenshot('../for_students/my_courses.en.png', ['li.dropdown-header'], elem => elem.textContent === 'My courses');

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

  await wizard.navigate(`http://localhost:3000/nl/courses/1/exercises/${exerciseNamesToIDs['ISBN']}/`);
  await wizard.screenshot('../for_students/exercise_start.nl.png');

  await wizard.scrollToBottom();
  await wizard.typeIn('textarea.ace_text-input', 's = 0\n' +
    'for i in range(1, 10):\n' +
    's += i * int(input())\n');
  await wizard.press('textarea.ace_text-input', 'Backspace');
  await wizard.typeIn('textarea.ace_text-input', 'print(s % 11)');

  await wizard.screenshot('../for_students/exercise_before_submit.nl.png', ['#editor-process-btn']);

  await wizard.click('#editor-process-btn');
  await new Promise(resolve => setTimeout(resolve, 20000));

  await wizard.screenshot('../for_students/exercise_feedback_correct.nl.png');

  await wizard.navigate(`http://localhost:3000/en/courses/1/exercises/${exerciseNamesToIDs['ISBN']}/`);
  await wizard.screenshot('../for_students/exercise_start.en.png');

  await wizard.scrollToBottom();
  await wizard.typeIn('textarea.ace_text-input', 's = 0\n' +
    'for i in range(1, 10):\n' +
    's += i * int(input())\n');
  await wizard.press('textarea.ace_text-input', 'Backspace');
  await wizard.typeIn('textarea.ace_text-input', 'print(s % 11)');

  await wizard.screenshot('../for_students/exercise_before_submit.en.png', ['#editor-process-btn']);

  await wizard.click('#editor-process-btn');
  await new Promise(resolve => setTimeout(resolve, 20000));

  await wizard.screenshot('../for_students/exercise_feedback_correct.en.png');

  await wizard.navigate(`http://localhost:3000/nl/courses/1/exercises/${exerciseNamesToIDs['Echo']}/`);
  await wizard.typeIn('textarea.ace_text-input', 'print(input() + "incorrect")');

  await wizard.click('#editor-process-btn');
  await new Promise(resolve => setTimeout(resolve, 20000));

  await wizard.screenshot('../for_students/exercise_feedback_incorrect.nl.png');

  await wizard.navigate(`http://localhost:3000/en/courses/1/exercises/${exerciseNamesToIDs['Echo']}/`);
  await wizard.typeIn('textarea.ace_text-input', 'print(input() + "incorrect")');

  await wizard.click('#editor-process-btn');
  await new Promise(resolve => setTimeout(resolve, 20000));

  await wizard.screenshot('../for_students/exercise_feedback_incorrect.en.png');

  await wizard.navigate('http://localhost:3000/nl/courses/1/');
  await wizard.screenshot('../for_students/deadline_series.nl.png');

  await wizard.navigate('http://localhost:3000/en/courses/1/');
  await wizard.screenshot('../for_students/deadline_series.en.png');

  await wizard.navigate(`http://localhost:3000/en/courses/1/exercises/${exerciseNamesToIDs['ISBN']}/`);
  await wizard.screenshot('../for_students/exercise_start.en.png');

  await wizard.scrollToBottom();
  await wizard.typeIn('textarea.ace_text-input', 's = 0\n' +
    'for i in range(1, 10):\n' +
    's += i * int(input())\n');
  await wizard.press('textarea.ace_text-input', 'Backspace');
  await wizard.typeIn('textarea.ace_text-input', 'print(8)');

  await wizard.click('#editor-process-btn');
  await new Promise(resolve => setTimeout(resolve, 20000));

  await wizard.navigate('http://localhost:3000/nl/courses/1/');
  await wizard.screenshot('../for_students/deadline_series_warning.nl.png');

  await wizard.navigate('http://localhost:3000/en/courses/1/');
  await wizard.screenshot('../for_students/deadline_series_warning.en.png');

  await wizard.close();
})();