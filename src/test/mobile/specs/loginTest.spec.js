import { driver } from '@wdio/globals';

import HomePage from "../../../pages/mobile/home.page"
import LoginPage from "../../../pages/mobile/login.page"

describe("Verify user can log in and log out successfully", () => {
    it("User login", async () => {
        driver.pause(25000);
        await HomePage.clickSideMenu();
        await HomePage.clickSideMenuLogin();
        await LoginPage.login(process.env.MOBILE_USERNAME, process.env.MOBILE_PASSWORD);
        await HomePage.verifySideMenuDisplayed();
    })

    // it('User logout', async () => {
    //     await HomePage.clickProfilePicture();
    //     await HomePage.clickLogout();
    //     await LoginPage.verifyTxtLoginDisplayed();
    // })
});