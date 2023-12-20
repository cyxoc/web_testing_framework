import Page from "../Components/page";

class Login extends Page {

    get emailLoginInput() {
        return $("#i0116");
    }
    
    get nextBtn() {
        return $("#idSIButton9");
    }

    get passwordInput() {
        return $("#i0118");
    }
    
    get signInBtn() {
        
        return $(`//*[@id="idSIButton9"]`);
    }

    get signInAnotherWay() {
        return $("#signInAnotherWay");
    }

    get useVerificationCode() {
        return $("#idDiv_SAOTCS_Proofs > div.tile:last-child");
    }

    get useVerificationCode() {
        return $("#idDiv_SAOTCS_Proofs > div.tile:last-child");
    }

    get mfaCodeInput() {
        return $("#idTxtBx_SAOTCC_OTC");
    }

    get mfaCodeSubmit() {
        return $("#idSubmit_SAOTCC_Continue");
    }

    get ecoHeader() {
        return $(`//span[@class='product']`);
    }

    

    async setErcEmail(email) {
        const input = await this.emailLoginInput;
        const submitButton = await this.nextBtn
        await input.waitForEnabled()
        await input.setValue(email)
        await submitButton.click()
      }
    
    async setErcPass(pass) {
        const input = await this.passwordInput;
        const passwordButton = await this.signInBtn
        await input.waitForEnabled();
        await browser.pause(500)
        await input.setValue(pass);
        await passwordButton.waitForClickable()
        await passwordButton.click()
    }

    async setMfa(mfacode) {
        const signInAnotherway = await this.signInAnotherWay
        const useVerificationCode = await this.useVerificationCode
        const input = await this.mfaCodeInput;
        const submitButton = await this.mfaCodeSubmit
        await signInAnotherway.waitForEnabled()
        await signInAnotherway.click()
        await useVerificationCode.waitForEnabled()
        await useVerificationCode.click()
        await input.setValue(mfacode)
        await submitButton.click()
        await this.ecoHeader.waitForExist({ timeout: 30000 })
    }

}

export default new Login()