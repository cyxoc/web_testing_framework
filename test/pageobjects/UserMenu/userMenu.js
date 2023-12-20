import Page from "../Components/page";

class UserMenu extends Page {

    get userMenuButton() {
        return $('div[class="user"]');
    }

    get userMenuCross() {
        return $("body > div.flyout.show > div.flyout-panel.right > div > div.panel-header > div.header-right > i");
    }

    get currentTheme() {
        return $('body');
    }

    get themeButton() {
        return $('label');
    }

    get userName() {
        return $('.user_menu_name');
    }

    get userEmail() {
        return $('.user_menu_email');
    }

    get helpButton() {
        return $('.user_menu_ul > li:nth-child(1) > a');
    }

    get idmButton() {
        return $('.user_menu_ul > li:nth-child(2) > a');
    }

    get featureRequestButton() {
        return $('.user_menu_ul > li:nth-child(3) > a');
    }

    get supportButton() {
        return $('.user_menu_ul > li:nth-child(4) > a');
    }

    get languageButton() {
        return $('.user_menu_ul > li:nth-child(6) > a');
    }

    get projectSourceButton() {
        return $('.user_menu_ul > li:nth-child(7) > a');
    }

    get signOutButton() {
        return $('.user_menu_signout');
    }

    get privacyButton() {
        return $('.user_menu_privacy');
    }

    get footerText() {
        return $('.user_menu_footer_text');
    }

    async getCurrentTheme() {
        const currentTheme = await this.currentTheme.getAttribute('class');
        // let currentTheme= (await $('body[class="dark"]')).length > 0 ? 'Dark' : 'Light'
        return currentTheme
    }

    async switchTheme(theme) {
        const currentTheme = await this.getCurrentTheme()
        console.log(currentTheme)
        if (currentTheme != theme) {
            const button = await this.themeButton
            await button.waitForClickable()
            await button.click()
        }
    }


    async openUserMenu() {
        const button = await this.userMenuButton
        await button.waitForClickable()
        await button.click()
        // await this.myCapabilityTitle.waitForExist()
    }

    async closeUserMenu() {
        const button = await this.userMenuCross
        await button.waitForClickable()
        await button.click()
        // await this.myCapabilityTitle.waitForExist()
    }

    async changeTheme(theme) {
        const button = await this.userMenuCross
        await button.waitForClickable()
        await button.click()
        // await this.myCapabilityTitle.waitForExist()
    }


    async checkLanguage() {
        const currentLanguage = await $('.flyout .user_menu_switch + li .dropdown button').getText();
        const setNewLang = currentLanguage === 'English' ? 'Spanish' : 'English';
        const language = currentLanguage === 'English' ? 'Language' : 'Idioma';

        await expect($('.flyout .user_menu_switch + li .user_menu_link')).toHaveText(language);
        await expect($('.flyout .user_menu_switch + li .dropdown button')).toHaveText(currentLanguage);
        // await expect($('.flyout .user_menu_switch + li .dropdown .menu div')).toHaveText('English');
        // await expect($('.flyout .user_menu_switch + li .dropdown .menu div + div')).toHaveText('Spanish');

        // Mouse clicks
        await $('.flyout .user_menu_switch + li .dropdown button').click();
        const button = await $('//div[text()[contains(., \'' + setNewLang + '\')]]');
        await button.click()

        await expect($('.flyout .user_menu_switch + li .dropdown button')).toHaveText(setNewLang);
        await browser.pause(3000)
        if (setNewLang === 'Spanish') {
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > h3')).toHaveText('Enlaces');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(1) > a')).toHaveText('Ayuda');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(2) > a')).toHaveText('Administrador de roles de IDM');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(3) > a')).toHaveText('Solicitud de funcionalidad');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(4) > a')).toHaveText('Soporte');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li.user_menu_switch > p')).toHaveText('Cambiar tema');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(6) > p')).toHaveText('Idioma');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(7) > p')).toHaveText('Fuente del proyecto');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-footer > div > button > span')).toHaveText('Cerrar Sesión');
        } else if (setNewLang === 'English') {
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > h3').toHaveText('Links'));
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(1) > a')).toHaveText('Help');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(2) > a')).toHaveText('IDM Role Management');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(3) > a')).toHaveText('Feature Request');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(4) > a')).toHaveText('Support');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li.user_menu_switch > p')).toHaveText('Switch Theme');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(6) > p')).toHaveText('Language');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-content > ul > li:nth-child(7) > p')).toHaveText('Project source');
            await expect($('body > div.flyout.show > div.flyout-panel.right > div > div.panel-footer > div > button > span')).toHaveText('Sign Out');
        }
    };


    async clickAndCompare(helpButton, title, url) {

        await helpButton.waitForClickable()
        await helpButton.click()
        const newTabHandle = await browser.waitUntil(async () => {
            const handles = await browser.getWindowHandles();
            return handles.length > 1 ? handles[1] : null;
        })
        await browser.switchToWindow(newTabHandle);
        await $('body').waitForExist()
        await browser.waitUntil(async () => await browser.execute(() => document.readyState === 'complete'))
        await browser.pause(1000)
        await expect(browser).toHaveTitle(title)
        await expect(browser).toHaveUrl(url)
    
    }


}

export default new UserMenu()