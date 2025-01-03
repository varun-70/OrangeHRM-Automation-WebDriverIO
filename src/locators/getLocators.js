import constants from '../config/constants';

/**
 * Retrieves the appropriate locator for the current platform and injects dynamic values if provided.
 * 
 * @param {Object} locatorObj - An object containing locators for different platforms.
 * @param {Object} [dynamicValues={}] - An object containing key-value pairs for dynamic locator values.
 * @returns {string} The locator string for the current platform with dynamic values injected.
 * @throws {Error} If the locator is not defined for the current platform.
 */
function getLocator(locatorObj, dynamicValues = {}) {
    const platform = process.env.PLATFORM;

    // for (const [key, locator] of Object.entries(pageLocators)) {
    //     if (!locator[platform]) {
    //         throw new Error(`Missing locator for platform: ${platform} in ${key}`);
    //     }
    // }

    if (!locatorObj[platform]) {
        throw new Error(`Locator not defined for platform: ${platform}`);
    }

    let locator = locatorObj[platform];

    // Inject dynamic values into the locator
    for (const [key, value] of Object.entries(dynamicValues)) {
        locator = locator.replace(`{{${key}}}`, value);
    }

    return locator;
}

export default getLocator;