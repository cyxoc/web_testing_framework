import Page from "../Components/page";

class MyCapabilities extends Page {

    get hamburgerbutton() {
        return $(`//i[@class='icon icon-app-launcher gn_icon']`)
    }

    get myCapabilitiesBox() {
        return $('div[data-testid="global-navigation-flyout"]')
    }

    get myCapabilitiesSearchBox() {
        return $('input[data-testid="global-navigation-search"]')
    }

    async searchMyCapabilities(search_string) {
        await browser.pause(100)
        const seachBox = await this.myCapabilitiesSearchBox;
        await seachBox.waitForDisplayed();
        await seachBox.waitForEnabled();
        await seachBox.setValue(search_string)
    }


    get myCapabilitiesSearchResultEmpty() {
        return $('div[class="gn_empty_state"]')
    }

    get myCapabilitirsCross() {
        return $("body > div.flyout.show > div.flyout-panel.right > div > div.panel-header > div.header-right > i");
    }

    async myCapabilitiesSearchResult() {
        await browser.pause(200)
        const element = await browser.$('.gn_groups')
        return await element.getText()
    }

    get myCapabilityTitle() {
        return $(`body > div.flyout.show > div.flyout-panel.right > div > div.panel-header > div.header-left > div`)
    }

    async openMyCapabilities(capability) {
        const button = await this.hamburgerbutton
        await button.waitForClickable()
        await button.click()
        await this.myCapabilityTitle.waitForExist()
    }

    async closeMyCapabilities(capability) {
        const button = await this.myCapabilitirsCross
        await button.waitForClickable()
        await button.click()
    }

    getCapability(capability) {
        return $(`//h3[text() = '${capability}']`)
    }

    get capabilityFunctions() {
        return $$('.gn_nav_group_open .gn_nav_item_wrapper')
    }

    async launchSubFunctions() {
        const elements = await this.capabilityFunctions
        const finalResult = []
        const responseCodes = []
        const functionUrls = []
        const helpUrls = []
        for (const elem of elements) {
            const parentTab = await browser.getWindowHandle();
            const handleUrl = elem.$('a')
            const functionURL = await handleUrl.getProperty('href')
            const helpURL = await elem.$('a + a').getProperty('href')
            await handleUrl.waitForClickable()
            await handleUrl.click()
            const newTabHandle = await browser.waitUntil(async () => {
                const handles = await browser.getWindowHandles();
                return handles.length > 1 ? handles[1] : null;
            })
            await browser.switchToWindow(newTabHandle);
            await $('body').waitForExist()
            await browser.waitUntil(async () => await browser.execute(() => document.readyState === 'complete'))
            await browser.pause(1000)
            const newTabTitle = await browser.getTitle()
            const newTabUrl = await browser.getUrl()
            const responseCode = await browser.execute(function() {
                try {
                  // Create an XMLHttpRequest object to make a synchronous request
                  var xhr = new XMLHttpRequest();
                  // Open a GET request to the current URL (the page you're testing)
                  xhr.open('GET', window.location.href, false); // Synchronous request
                  // Send the request
                  xhr.send(null);
                  // Return the response status code
                  return xhr.status;
                } catch (error) {
                  return -1;
                }
            })
            const result = {'URL': newTabUrl, 'Title': newTabTitle}
            await browser.closeWindow();
            await browser.switchToWindow(parentTab);
            finalResult.push(result)
            responseCodes.push(responseCode)
            functionUrls.push(functionURL)
            helpUrls.push(helpURL)
        }
        return [finalResult, responseCodes, functionUrls, helpUrls]
    }

    async clickOnCapability(capability) {
        const button = await this.getCapability(capability)
        await button.waitForClickable()
        await button.scrollIntoView({ block: 'center', inline: 'center' })
        await button.click()
    }

}

export default new MyCapabilities()