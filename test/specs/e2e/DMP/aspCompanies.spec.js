import * as dotenv from 'dotenv' 
dotenv.config()

import { updateUserPreferences } from "../../../../helperfunctions/preferances"
import aspCompany from '../../../pageobjects/aspCompanies/aspCompany'


describe('ASP Companies', () => {
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

  it('ASP Companies', async () => {
    
    await aspCompany.expandASPprofileManagement()
    await expect(aspCompany.ASPprofileManagementText).toHaveText('ASP Profile Management')
    await aspCompany.openASPcompanies()
    await expect(aspCompany.ASPcompaniesText).toHaveText('ASP Companies')
    await browser.pause(5000)
    

  })

  it('ASP Companies > Pagination', async () => {
    
    await aspCompany.expandASPprofileManagement()
    await expect(aspCompany.ASPprofileManagementText).toHaveText('ASP Profile Management')
    await aspCompany.openASPcompanies()
    await expect(aspCompany.ASPcompaniesText).toHaveText('ASP Companies')
    await browser.pause(5000)
    

  })



  
})

