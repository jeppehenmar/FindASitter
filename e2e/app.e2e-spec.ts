import { AppPage } from './app.po';
import {browser, element, by} from "protractor";

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

describe('Home page', () => {
  it('Should ')
});
