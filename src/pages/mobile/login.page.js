import { $, expect } from '@wdio/globals'
import allure from '@wdio/allure-reporter';
import getLocator from '../../locators/getLocators.js';
import Locators from '../../locators/Locators.js';

/**
 * LoginPage class represents the Login page of the mobile application.
 * It provides methods to interact with the login form elements.
 */
class LoginPage {
    constructor() {
        this.loginPageLocators = Locators.LoginPageLocators;
    }

    /**
     * Perform login action with provided credentials.
     * This method enters the username and password, then clicks the login button.
     * Each step is reported to Allure for detailed test reporting.
     * 
     * @param {string} username - The username to be entered
     * @param {string} password - The password to be entered
     * @returns {Promise<void>}
     */
    async login(username, password) {
        allure.startStep(`Enter username: ${username}`);
        const userNameField = $(getLocator(this.loginPageLocators.fields.username));
        await userNameField.setValue(username);
        allure.endStep();

        allure.startStep(`Enter password: ${password}`);
        const passwordField = $(getLocator(this.loginPageLocators.fields.password));
        await passwordField.setValue(password);
        allure.endStep();

        allure.startStep('Click Login Button')
        const loginButton = $(getLocator(this.loginPageLocators.buttons.login));
        await loginButton.click();
        allure.endStep();
    }
}

export default new LoginPage();