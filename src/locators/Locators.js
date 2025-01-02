/**
 * Locators for the Login page elements.
 * @typedef {Object} LoginPageLocators
 * @property {Object} fields - Input field locators
 * @property {Object} buttons - Button locators
 */
const LoginPageLocators = {
    fields: {
        username: {
            android: '', // TODO: 
            ios: '', // TODO: 
            web: 'input[name="username"]',
        },
        password: {
            android: '',
            ios: '',
            web: 'input[name="password"]',
        },
    },
    buttons: {
        login: {
            android: '',
            ios: '',
            web: 'button[type="submit"]',
        },
    },
};

/**
 * Locators for the Login page elements.
 * @typedef {Object} LoginPageLocators
 * @property {Object} fields - Input field locators
 * @property {Object} buttons - Button locators
 */
const HomePageLocators = {
    buttons: {
        views: {
            android: 'Views',
            ios: '',
            web: '',
        },
        animation: {
            android: 'Animation',
            ios: '',
            web: '',
        }
    }
}

export default { LoginPageLocators, HomePageLocators };