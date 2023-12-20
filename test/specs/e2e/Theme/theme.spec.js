import userMenu from '../../../pageobjects/UserMenu/userMenu'
import mycapabilities from "../../../pageobjects/MyCapabilities/mycapabilities"
import releaseNotes from "../../../pageobjects/ReleaseNotes/releaseNotes"
import { updateUserPreferences } from "../../../../helperfunctions/preferances"




describe('Dark Theme', () => {
    before(async () => {
        await updateUserPreferences()
        await browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Page not loaded in 60 seconds'
            }
          )
        await browser.pause(2000)
    })

    it('Dark Theme > Getting Started page', async () => {
        // Save a screen
        // assert.deepEqual(await userMenu.getCurrentTheme(), 'Dark' )
        await browser.saveScreen('gettingStarted', {})
        await expect(await browser.checkScreen('gettingStarted', {/* some options */})).toEqual(0)


    })

    it('Dark Theme > User menu', async () => {
        await userMenu.openUserMenu()
        await browser.saveScreen('user_menu', {})
        await expect(await browser.checkScreen('user_menu', {/* some options */})).toEqual(0)
        await userMenu.closeUserMenu()
    })

    it('Dark Theme > My Capabilities', async () => {
        await mycapabilities.openMyCapabilities()
        await browser.saveScreen('myCapabilities', {})
        await expect(await browser.checkScreen('myCapabilities', {/* some options */})).toEqual(0)
        await mycapabilities.closeMyCapabilities()

    })

    it('Dark Theme > Release Notes', async () => {
        await releaseNotes.openReleaseNotesTopMenu()
        await browser.pause(1000)
        await browser.saveScreen('releaseNotes', {})
        await expect(await browser.checkScreen('releaseNotes', {/* some options */})).toEqual(0)
    })
})

describe('Light Theme', () => {
    before(async () => {
        await updateUserPreferences()
        await browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Page not loaded in 60 seconds'
            }
          )
        await browser.pause(1000)
        await userMenu.openUserMenu()
        await userMenu.switchTheme('light')
        await userMenu.closeUserMenu()
        await browser.pause(1000)
    })

    it('Light Theme > Getting Started page', async () => {
        // Save a screen
        // assert.deepEqual(await userMenu.getCurrentTheme(), 'Light' )
        await browser.saveScreen('gettingStartedLight', {})
        await expect(await browser.checkScreen('gettingStartedLight', {/* some options */})).toEqual(0)


    })

    it('Light Theme > User menu', async () => {
        await userMenu.openUserMenu()
        await browser.saveScreen('user_menu_light', {})
        await expect(await browser.checkScreen('user_menu_light', {/* some options */})).toEqual(0)
        await userMenu.closeUserMenu()
    })

    it('Light Theme > My Capabilities', async () => {
        await mycapabilities.openMyCapabilities()
        await browser.saveScreen('myCapabilitiesLight', {})
        await expect(await browser.checkScreen('myCapabilitiesLight', {/* some options */})).toEqual(0)
        await mycapabilities.closeMyCapabilities()

    })

    it('Light Theme > Release Notes', async () => {
        await releaseNotes.openReleaseNotesTopMenu()
        await browser.saveScreen('releaseNotesLight', {})
        await expect(await browser.checkScreen('releaseNotesLight', {/* some options */})).toEqual(0)
    })
})