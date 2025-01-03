import { $, expect } from '@wdio/globals'
import Page from './page.js';
import allure from '@wdio/allure-reporter';
import getLocator from '../../locators/getLocators.js';
import Locators from '../../locators/Locators.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    constructor() {
        // validateLocators(LoginPageLocators);
        super();
        this.locators = Locators; //LoginPageLocators;
    }

    /**
     * define selectors using getter methods
     */
    // get inputUsername() {
    //     return $('input[name="username"]');
    // }

    // get inputPassword() {
    //     return $('input[name="password"]');
    // }

    // get btnSubmit() {
    //     return $('button[type="submit"]');
    // }

    // get txtLogin() {
    //     return $('h5=Login');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        allure.startStep(`Enter username: ${username}`);
        const userNameField = $(getLocator(this.locators.LoginPageLocators.fields.username));
        await userNameField.setValue(username);
        allure.endStep();
        
        // await browser.pause(1000);
        allure.startStep(`Enter password: ${password}`);
        const passwordField = $(getLocator(this.locators.LoginPageLocators.fields.password));
        await passwordField.setValue(password);
        allure.endStep();

        // await browser.pause(1000);
        allure.startStep('Click Login Button')
        const loginButton = $(getLocator(this.locators.LoginPageLocators.buttons.login));
        await loginButton.click();
        allure.endStep();
        // await browser.pause(1000);
    }

    async verifyTxtLoginDisplayed() {
        await expect(this.txtLogin).toBeDisplayed();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();
