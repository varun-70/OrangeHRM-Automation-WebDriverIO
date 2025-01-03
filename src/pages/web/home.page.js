import { $ } from '@wdio/globals';
import page from './page.js';

class HomePage extends page {
    get profilePicture() {
        return $('aria/profile picture');
    }

    get logout() {
        return $('=Logout');
    }

    async verifyProfilePictureDisplayed() {
        await expect(this.profilePicture).toBeDisplayed();
    }

    async clickProfilePicture() {
        await this.profilePicture.click();
    }

    async clickLogout() {
        await this.logout.click();
    }
}

export default new HomePage();