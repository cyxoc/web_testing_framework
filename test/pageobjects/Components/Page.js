// const { browser } = require('@wdio/globals')
// import browser from '@wdio/globals'
// const { $ } = require('@wdio/globals')

export default class Page {
    path = '/';

    async openUrl(url) {
        await browser.url(url)
    }
    open (url) {
        return browser.url(url)
    }

    async open(host = '') {
        await browser.url(`${host}${this.path}`);
    }

    get url() {
        return browser.getUrl();
    }

    get title() {
        return browser.getTitle();
    }

    async getContent() {
        const body = await $('body');
        return body.getText();
    }
}

