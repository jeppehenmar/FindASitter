import { AppPage } from './app.po';
import {browser, element, by} from "protractor";
import {elementNames} from "@angular/language-service/src/html_info";

describe('demoproject App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should welcome user', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to FindASitter!');
  });
});

describe('Login page', () => {
  it('Should login with admin and redirect to /home/contact', () => {
    browser.get('/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('admin');
    element(by.id('login')).click();

    expect(browser.getCurrentUrl()).toContain('/home/contact');
  })
});

describe('Babies test', () =>{
  it('Should create a new baby when form is valid', async() => {
    element(by.id('view-babies')).click();
    element.all(by.css(".e2e-baby")).then(function (elementsBefore) {
      const numBabiesBefore = elementsBefore.length;
      element(by.id('register')).click();
      element(by.id('type-baby')).click();

      element(by.id('firstname')).sendKeys("Test - Michael");
      element(by.id('postalCode')).sendKeys("Test - 2100");
      element(by.id('age')).sendKeys("Test - 16");
      element(by.id('picture')).sendKeys("Test - none");
      element(by.id('gender')).sendKeys("Test - Male");

      element(by.id('e2e-submit')).click();

      element.all(by.css(".e2e-baby")).then(function(elementsAfter) {
        const numBabiesAfter = elementsAfter.length;
        expect(numBabiesAfter).toBe(numBabiesBefore+1)

      });
      browser.sleep(8000);
    })

  })
});

describe('Sitters test', () => {
  it('Should create a new sitter when form is valid', async() => {
    element(by.id('view-sitters')).click();
    element.all(by.css('.e2e-sitter')).then(function (elementsBefore) {
      const numSittersBefore = elementsBefore.length;
      element(by.id('register')).click();
      element(by.id('type-sitter')).click();

      element(by.id('firstname')).sendKeys("Test - Lone")
      element(by.id('lastname')).sendKeys("Test - Hansen")
      element(by.id('age')).sendKeys("Test - 22")
      element(by.id('years')).sendKeys("Test - 2")
      element(by.id('region')).sendKeys("Test - Copenhagen")
      element(by.id('gender')).sendKeys("Test - Female")
      element(by.id('phone')).sendKeys("Test - 10203040")

      element(by.id('e2e-submit')).click();

      element.all(by.css('e2e-sitter')).then(function (elementsAfter) {
        const numSittersAfter = elementsAfter.length;
        expect(numSittersAfter).toBe(numSittersBefore+1);
        browser.sleep(8000);
1      });
    });


  })
})

describe('Home page', () => {
  it('Should ')
});
