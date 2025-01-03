import { $, expect } from '@wdio/globals';
import getLocator from "../../locators/getLocators";
import Locators from '../../locators/Locators.js';

/**
 * HomePage class represents the Home page of the mobile application.
 * It provides methods to interact with various elements on the Home page.
 */
class HomePage {
    constructor() {
        this.homePageLocators = Locators.HomePageLocators;
        this.sideMenuPageLocators = Locators.SideMenuLocators;
    }

    async clickViews() {
        const views = $(getLocator(this.locators.views));
        await views.click();
    }

    async verifyAnimationBtnDisplayed() {
        const animation = $(getLocator(this.locators.animation));
        await expect(animation).toBeDisplayed();
    }

    async clickSideMenu() {
        const sideMenu = $(getLocator(this.homePageLocators.buttons.sideMenu));
        await sideMenu.click();
    }

    async verifySideMenuDisplayed() {
        const sideMenu = $(getLocator(this.homePageLocators.buttons.sideMenu));
        await expect(sideMenu).toBeDisplayed();
    }

    async clickSideMenuLogin() {
        const sideMenuLocators = $(getLocator(this.sideMenuPageLocators.buttons.logIn));
        await sideMenuLocators.click();
    }
}

export default new HomePage();