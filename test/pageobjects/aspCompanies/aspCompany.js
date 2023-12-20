import Page from "../Components/page";

class AspCompany extends Page {

    get ASPprofileManagementdropdown() {
        return $(".navigation > ul > li:nth-child(3)");
    }
    // #app > div > div.appnav > div.tree.navigation > ul > li:nth-child(3)
    get ASPprofileManagementText() {
        return $(".navigation > ul > li:nth-child(3) > span");
    }

    get ASPcompaniesButton() {
        // return $("[data-testid='/dmp/companies']");
        return $('#app > div > div.appnav > div.tree.navigation > ul > li:nth-child(3) > ul > li:nth-child(1) > span')
    }

    get ASPcompaniesText() {
        // return $("[data-testid='/dmp/companies']");
        return $$('*[data-testid="/dmp/companies"]')[1]
        
    }

    get ASPcompaniesPagination() {
        return $('.pagination')
    }

    get ASPcompaniesPaginationLeftArrow() {
        return $('[data-testid="companies-table-pagination-arrowLeft"]')
    }

    get ASPcompaniesPaginationRightArrow() {
        return $('[data-testid="companies-table-pagination-arrowRight"]')
        
    }

    get ASPcompaniesPaginationActivePage() {
        return $('li.active')
        //li[@class='active']
    }

    get ASPcompaniesPaginationFirstPage() {
        return $('//a[text()="1"]')
    }

    get ASPcompaniesPaginationLastPage() {
        return $('.pagination')
    }

    get ASPcompaniesPaginationFifthPage() {
        return $('//a[text()="5"]')
    }

    async expandASPprofileManagement() {
        const button = await this.ASPprofileManagementdropdown
        await button.waitForExist()
        await button.click()
    }

    async openASPcompanies() {
        const button = await this.ASPcompaniesButton
        await button.waitForClickable()
        await button.click()
    }

}

export default new AspCompany()