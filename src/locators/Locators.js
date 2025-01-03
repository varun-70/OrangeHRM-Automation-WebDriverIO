/**
 * Locators for the Login page elements.
 * @typedef {Object} LoginPageLocators
 * @property {Object} fields - Input field locators
 * @property {Object} buttons - Button locators
 */
const LoginPageLocators = {
    fields: {
        username: {
            android: '~Username input field',
            ios: '', // TODO: 
            web: 'input[name="username"]',
        },
        password: {
            android: '~Password input field',
            ios: '',
            web: 'input[name="password"]',
        },
    },
    buttons: {
        login: {
            android: '~Login button',
            ios: '',
            web: 'button[type="submit"]',
        },
    },
};

/**
 * Locators for the Home page elements.
 * @typedef {Object} HomePageLocators
 * @property {Object} fields - Input field locators
 * @property {Object} buttons - Button locators
 */
const HomePageLocators = {
    buttons: {
        views: {
            android: '~Views',
            ios: '',
            web: '',
        },
        animation: {
            android: '~Animation',
            ios: '',
            web: '',
        },
        sideMenu: {
            android: '~open menu',
            ios: '',
            web: '',
        },
    },
};

/**
 * Locators for the Side menu elements.
 * @typedef {Object} SideMenuLocators
 * @property {Object} fields - Input field locators
 * @property {Object} buttons - Button locators
 */
const SideMenuLocators = {
    buttons: {
        logIn: {
            android: '~menu item log in',
            ios: '',
            web: '',
        },
    },
};

export default { LoginPageLocators, HomePageLocators, SideMenuLocators };
// export default LoginPageLocators;
// export default HomePageLocators;
// export default SideMenuLocators;