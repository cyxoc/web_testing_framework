import TOTP from 'totp-generator'
import * as dotenv from 'dotenv' 
dotenv.config()

// import Login from '../../../pageobjects/Login/login'
import login from '../../../pageobjects/Login/login'

describe('Login to ECO', () => {
    it('should login with valid credentials', async () => {
        await login.openUrl(process.env.URL)
        await login.setErcEmail(process.env.EMAIL)
        await login.setErcPass(process.env.PASSWORD)
        await login.setMfa(TOTP(process.env.MFA_SECRET))
        await expect(login.ecoHeader).toHaveText('**************************')
        //Comit test
    })

})
