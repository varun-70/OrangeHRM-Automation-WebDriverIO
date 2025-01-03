import LoginPage from "../../../pages/web/login.page";
import HomePage from "../../../pages/web/home.page";
// import { log } from "winston";
// const log = require('winston');

describe("Verify user can log in and log out successfully", () => {
    it("User login", async () => {
        // const login = new loginPage();
        await LoginPage.open();
        await LoginPage.login(process.env.USERNAME, process.env.PASSWORD);
        await HomePage.verifyProfilePictureDisplayed();
        // log.info('Test execution passed');
    })

    it('User logout', async () => {
        await HomePage.clickProfilePicture();
        await HomePage.clickLogout();
        await LoginPage.verifyTxtLoginDisplayed();




        // await HomePage.clickProfilePicture()
        //     .then((homePage) => homePage.clickLogout())
        //     .then((logoutPage) => logoutPage.verifyTxtLoginDisplayed());

        // await (await (await HomePage.clickProfilePicture())
        //     .HomePage.clickLogout())
        //     .LoginPage.verifyTxtLoginDisplayed());
    })

    // [
    //     { testCaseName: 'ValidUsername_InvalidPassword', username: 'standard_user', password: '12345', errorMessage: 'Epic sadface: Username and password do not match any user in this service' },
    //     { testCaseName: 'ValidUsername_EmptyPassword', username: 'standard_user', password: '', errorMessage: 'Epic sadface: Password is required' },
    //     { testCaseName: 'EmptyUsername_EmptyPassword', username: '', password: '', errorMessage: 'Epic sadface: Username is required' },
    //     { testCaseName: 'InvalidUsername_InvalidPassword', username: '12345', password: '12345', errorMessage: 'Epic sadface: Username and password do not match any user in this service' }
    // ].forEach(({ testCaseName, username, password, errorMessage }) => {
    //     it(`Validating invalid login ${testCaseName}`, async () => {
    //         await LoginPage.open();
    //         await LoginPage.login("Admin", "admin123");
    //         print(`${testCaseName} - ${username} - ${password} - ${errorMessage}`);
    //     });
    // })

    // const invalidData = [
    //     { testCaseName: 'ValidUsername_InvalidPassword', username: 'Admin', password: '12345', errorMessage: 'Epic sadface: Username and password do not match any user in this service' },
    //     { testCaseName: 'ValidUsername_EmptyPassword', username: 'standard_user', password: '', errorMessage: 'Epic sadface: Password is required' },
    //     { testCaseName: 'EmptyUsername_EmptyPassword', username: '', password: '', errorMessage: 'Epic sadface: Username is required' },
    //     { testCaseName: 'InvalidUsername_InvalidPassword', username: '12345', password: '12345', errorMessage: 'Epic sadface: Username and password do not match any user in this service' }
    // ];
    // it('Validating invalid login', () => {
    //     for (const testData of people) {
    //         it(`Validating ${testData[0]}`, async () => {
    //             // print();
    //             console.log(`-------------------------------- ${testData[0]}}`);
    //             await LoginPage.open();
    //             await LoginPage.login(testData[1], testData[2]);
    //             print(`${testCaseName} - ${username} - ${password} - ${errorMessage}`);
    //         })
    //     }
    // })

    // const people = ['Alice', 'Bob']
    // it('my tests', () => {
    //     for (const name of people) {
    //         it(`testing with ${name}`, async () => {
    //             console.log(`-------------------------------- ${name}`);
    //             // ...
    //         })
    //     }
    // })

})