import * as dotenv from 'dotenv' 
dotenv.config()

import userMenu from '../../../pageobjects/UserMenu/userMenu'
import mycapabilities from "../../../pageobjects/MyCapabilities/mycapabilities"
import releaseNotes from "../../../pageobjects/ReleaseNotes/releaseNotes"
import { updateUserPreferences } from "../../../../helperfunctions/preferances"


describe('User Menu', () => {
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
    
  })

  beforeEach(async () => {
    const windowHandles = await browser.getWindowHandles()
     if (windowHandles.length > 1) {await browser.closeWindow()}
    await browser.switchToWindow(windowHandles[0]);
  })
  

  it('User Menu > Contents', async () => {
    await userMenu.openUserMenu()
    await expect(userMenu.userName).toHaveText(process.env.NAME)
    await expect(userMenu.userEmail).toHaveText(process.env.EMAIL)
    await expect(userMenu.helpButton).toHaveText('Help')
    await expect(userMenu.idmButton).toHaveText('*************')
    await expect(userMenu.featureRequestButton).toHaveText('Feature Request')
    await expect(userMenu.supportButton).toHaveText('Support')

  })

  it('User Menu > Help', async () => {
    const parentTab = await browser.getWindowHandle();
    const helpButton = await userMenu.helpButton
    await userMenu.clickAndCompare(helpButton, '*********', '********')
    await browser.closeWindow();
    await browser.switchToWindow(parentTab);
  })

  it('User Menu > IDM', async () => {
    const parentTab = await browser.getWindowHandle();
    const idmButton = await userMenu.idmButton
    await userMenu.clickAndCompare(idmButton, '*********', '********')
    await browser.closeWindow();
    await browser.switchToWindow(parentTab);

  })

  it('User Menu > Feature Request', async () => {
    const parentTab = await browser.getWindowHandle();
    const featureButton = await userMenu.featureRequestButton
    await userMenu.clickAndCompare(featureButton, '*********', '********')
    await browser.closeWindow();
    await browser.switchToWindow(parentTab);
  })

  it('User Menu > Support', async () => {
    const parentTab = await browser.getWindowHandle();
    const supportButton = await userMenu.supportButton
    await userMenu.clickAndCompare(supportButton, '*********', '********')
    await browser.closeWindow();
    await browser.switchToWindow(parentTab);

  })

  it('User Menu > Language', async () => {

    await userMenu.checkLanguage()
    await updateUserPreferences()
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: 'Page not loaded in 60 seconds'
      }
    )

  })

  it('User Menu > Project Source', async () => {


  })

  it('User Menu > Sign Out', async () => {
    await userMenu.openUserMenu()
    const signOutButton = await userMenu.signOutButton
    await signOutButton.waitForClickable()
    await signOutButton.click()
    await browser.pause(5000)

    // Assertion part To-DO

  })

  it('User Menu > Privacy', async () => {


  })

})

