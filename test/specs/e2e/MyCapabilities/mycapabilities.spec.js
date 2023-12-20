import { updateUserPreferences } from "../../../../helperfunctions/preferances"
import mycapabilities from "../../../pageobjects/MyCapabilities/mycapabilities"
import {
    SupplierCompetenceUat, SupplierCompetenceResponseUat, ActivityManagementUat, ActivityManagementResponseUat,
    siteSurveyUat, siteSurveyResponseUat, BoMScopingUat, BoMScopingResponseUat, sp2pUat, sp2pResponseUat,
    DetailedDesignUat, DetailedDesignResponseUat, ConfigurationScriptGenerationUat, ConfigurationScriptGenerationResponseUat,
    auditUat, auditResponseUat, ohsUat, ohsResponseUat, integrationUat, integrationResponseUat, HealthChecksTroubleshootingUat,
    HealthChecksTroubleshootingResponseUat, acceptanceUat, acceptanceResponseUat, qualityUat, qualityResponseUat,
    knowledgeUat, knowledgeResponseUat, SupplierCompetenceUrlsUat, SupplierCompetenceHelpUat, ActivityManagementUrlsUat, ActivityManagementHelpUat, DetailedDesignUrlsUat, DetailedDesignHelpUat, siteSurveyUrlsUat, siteSurveyHelpUat, sp2pUrlsUat, sp2pHelpUat, ConfigurationScriptGenerationUrlsUat, ConfigurationScriptGenerationHelpUat, auditUrlsUat, auditHelpUat, ohsUrlsUat, ohsHelpUat, integrationUrlsUat, integrationHelpUat, HealthChecksTroubleshootingUrlsUat, HealthChecksTroubleshootingHelpUat, acceptanceUrlsUat, acceptanceHelpUat, qualityUrlsUat, qualityHelpUat, knowledgeUrlsUat, knowledgeHelpUat, BoMScopingUrlsUat, BoMScopingHelpUat
} from "../../../../testdata/myCapabilities/myCapabilitiesUat"

// const subFoldersMetadata = process.env.ENV_NAME === 'PROD' ? prodSubFoldersMetadata : uatSubFoldersMetadata
const SupplierCompetence = process.env.ENV_NAME === 'PROD' ? SupplierCompetenceProd : SupplierCompetenceUat
const SupplierCompetenceRes = process.env.ENV_NAME === 'PROD' ? SupplierCompetenceResponseProd : SupplierCompetenceResponseUat
const SupplierCompetenceUrl = process.env.ENV_NAME === 'PROD' ? SupplierCompetenceResponseProd : SupplierCompetenceUrlsUat
const SupplierCompetenceHelp = process.env.ENV_NAME === 'PROD' ? SupplierCompetenceResponseProd : SupplierCompetenceHelpUat
const ActivityManagement = process.env.ENV_NAME === 'PROD' ? ActivityManagementProd : ActivityManagementUat
const ActivityManagementRes = process.env.ENV_NAME === 'PROD' ? ActivityManagementResponseProd : ActivityManagementResponseUat
const ActivityManagementUrl = process.env.ENV_NAME === 'PROD' ? ActivityManagementProd : ActivityManagementUrlsUat
const ActivityManagementHelp = process.env.ENV_NAME === 'PROD' ? ActivityManagementProd : ActivityManagementHelpUat
const BoMScoping = process.env.ENV_NAME === 'PROD' ? BoMScopingProd : BoMScopingUat
const BoMScopingRes = process.env.ENV_NAME === 'PROD' ? BoMScopingResponseProd : BoMScopingResponseUat
const BoMScopingUrl = process.env.ENV_NAME === 'PROD' ? BoMScopingProd : BoMScopingUrlsUat
const BoMScopingHelp = process.env.ENV_NAME === 'PROD' ? BoMScopingProd : BoMScopingHelpUat
const sp2p = process.env.ENV_NAME === 'PROD' ? sp2pProd : sp2pUat
const sp2pRes = process.env.ENV_NAME === 'PROD' ? sp2pResponseProd : sp2pResponseUat
const sp2pUrl = process.env.ENV_NAME === 'PROD' ? sp2pProd : sp2pUrlsUat
const sp2pHelp = process.env.ENV_NAME === 'PROD' ? sp2pProd : sp2pHelpUat
const DetailedDesign = process.env.ENV_NAME === 'PROD' ? DetailedDesignProd : DetailedDesignUat
const DetailedDesignRes = process.env.ENV_NAME === 'PROD' ? DetailedDesignResponseProd : DetailedDesignResponseUat
const DetailedDesignUrl = process.env.ENV_NAME === 'PROD' ? DetailedDesignProd : DetailedDesignUrlsUat
const DetailedDesignHelp = process.env.ENV_NAME === 'PROD' ? DetailedDesignProd : DetailedDesignHelpUat
const siteSurvey = process.env.ENV_NAME === 'PROD' ? siteSurveyProd : siteSurveyUat
const siteSurveyRes = process.env.ENV_NAME === 'PROD' ? siteSurveyResponseProd : siteSurveyResponseUat
const siteSurveyUrl = process.env.ENV_NAME === 'PROD' ? siteSurveyProd : siteSurveyUrlsUat
const siteSurveyHelp = process.env.ENV_NAME === 'PROD' ? siteSurveyProd : siteSurveyHelpUat
const ConfigurationScriptGeneration = process.env.ENV_NAME === 'PROD' ? ConfigurationScriptGenerationProd : ConfigurationScriptGenerationUat
const ConfigurationScriptGenerationRes = process.env.ENV_NAME === 'PROD' ? ConfigurationScriptGenerationResponseProd : ConfigurationScriptGenerationResponseUat
const ConfigurationScriptGenerationzUrl = process.env.ENV_NAME === 'PROD' ? ConfigurationScriptGenerationProd : ConfigurationScriptGenerationUrlsUat
const ConfigurationScriptGenerationHelp = process.env.ENV_NAME === 'PROD' ? ConfigurationScriptGenerationProd : ConfigurationScriptGenerationHelpUat
const audit = process.env.ENV_NAME === 'PROD' ? auditProd : auditUat
const auditRes = process.env.ENV_NAME === 'PROD' ? auditResponseProd : auditResponseUat
const auditUrl = process.env.ENV_NAME === 'PROD' ? auditProd : auditUrlsUat
const auditHelp = process.env.ENV_NAME === 'PROD' ? auditProd : auditHelpUat
const ohs = process.env.ENV_NAME === 'PROD' ? ohsProd : ohsUat
const ohsRes = process.env.ENV_NAME === 'PROD' ? ohsResponseProd : ohsResponseUat
const ohsUrl = process.env.ENV_NAME === 'PROD' ? ohsProd : ohsUrlsUat
const ohsHelp = process.env.ENV_NAME === 'PROD' ? ohsProd : ohsHelpUat
const integration = process.env.ENV_NAME === 'PROD' ? integrationProd : integrationUat
const integrationRes = process.env.ENV_NAME === 'PROD' ? integrationResponseProd : integrationResponseUat
const integrationUrl = process.env.ENV_NAME === 'PROD' ? integrationProd : integrationUrlsUat
const integrationHelp = process.env.ENV_NAME === 'PROD' ? integrationProd : integrationHelpUat
const HealthChecksTroubleshooting = process.env.ENV_NAME === 'PROD' ? HealthChecksTroubleshootingProd : HealthChecksTroubleshootingUat
const HealthChecksTroubleshootingRes = process.env.ENV_NAME === 'PROD' ? HealthChecksTroubleshootingResponseProd : HealthChecksTroubleshootingResponseUat
const HealthChecksTroubleshootingUrl = process.env.ENV_NAME === 'PROD' ? HealthChecksTroubleshootingProd : HealthChecksTroubleshootingUrlsUat
const HealthChecksTroubleshootingHelp = process.env.ENV_NAME === 'PROD' ? HealthChecksTroubleshootingProd : HealthChecksTroubleshootingHelpUat
const acceptance = process.env.ENV_NAME === 'PROD' ? acceptanceProd : acceptanceUat
const acceptanceRes = process.env.ENV_NAME === 'PROD' ? acceptanceResponseProd : acceptanceResponseUat
const acceptanceUrl = process.env.ENV_NAME === 'PROD' ? acceptanceProd : acceptanceUrlsUat
const acceptanceHelp = process.env.ENV_NAME === 'PROD' ? acceptanceProd : acceptanceHelpUat
const quality = process.env.ENV_NAME === 'PROD' ? qualityProd : qualityUat
const qualityRes = process.env.ENV_NAME === 'PROD' ? qualityResponseProd : qualityResponseUat
const qualityUrl = process.env.ENV_NAME === 'PROD' ? qualityProd : qualityUrlsUat
const qualityHelp = process.env.ENV_NAME === 'PROD' ? qualityProd : qualityHelpUat
const knowledge = process.env.ENV_NAME === 'PROD' ? knowledgeProd : knowledgeUat
const knowledgeRes = process.env.ENV_NAME === 'PROD' ? knowledgeResponseProd : knowledgeResponseUat
const knowledgeUrl = process.env.ENV_NAME === 'PROD' ? knowledgeProd : knowledgeUrlsUat
const knowledgeHelp = process.env.ENV_NAME === 'PROD' ? knowledgeProd : knowledgeHelpUat



describe('My Capbilities navigation & Search', function () {


    it('My Capbilities > clicks', async () => {
        await expect(mycapabilities.hamburgerbutton).toExist()
        await expect(mycapabilities.hamburgerbutton).toBeDisplayed()
        await expect(mycapabilities.myCapabilitiesBox).not.toBeDisplayed()
        await mycapabilities.openMyCapabilities()
   
    })

    it('My Capbilities > Empty search', async () => {
        await mycapabilities.searchMyCapabilities('hgwdkjahfa')
        await expect(mycapabilities.myCapabilitiesSearchResultEmpty).toHaveText('Nothing found.')

    })

    it('My Capbilities > Search', async () => {
        await mycapabilities.searchMyCapabilities('sde')
        const result = await mycapabilities.myCapabilitiesSearchResult()
        await assert.equal(result, `Site Survey\nDetailed Design/As-Built\nAcceptance\nQuality` )

    })

})

describe('Launch subfuction from My Capbilities', function () {

    this.retries(1)

    before(async () => {
        await updateUserPreferences()
        await mycapabilities.openMyCapabilities()
    })

    it('My Capbilities > Supplier Competence', async () => {
        await mycapabilities.clickOnCapability('Supplier Competence')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Supplier Competence')
        assert.deepEqual(functionUrls, SupplierCompetenceUrl )
        assert.deepEqual(helpUrls, SupplierCompetenceHelp)
        assert.deepEqual(response, SupplierCompetenceRes )
        assert.deepEqual(result, SupplierCompetence)
    })

    it('My Capbilities > Activity Management', async () => {
        await mycapabilities.clickOnCapability('Activity Management')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Activity Management')
        assert.deepEqual(functionUrls, ActivityManagementUrl )
        assert.deepEqual(helpUrls, ActivityManagementHelp)
        assert.deepEqual(response, ActivityManagementRes)
        assert.deepEqual(result, ActivityManagement)

    })

    it('My Capbilities > Detailed Design/As-Built', async () => {
        await mycapabilities.clickOnCapability('Detailed Design/As-Built')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Detailed Design/As-Built')
        assert.deepEqual(functionUrls, DetailedDesignUrl )
        assert.deepEqual(helpUrls, DetailedDesignHelp)
        assert.deepEqual(response, DetailedDesignRes)
        assert.deepEqual(result, DetailedDesign)
    })

    it('My Capbilities > Site Survey', async () => {
        await mycapabilities.clickOnCapability('Site Survey')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Site Survey')
        assert.deepEqual(functionUrls, siteSurveyUrl )
        assert.deepEqual(helpUrls, siteSurveyHelp)
        assert.deepEqual(response, siteSurveyRes)
        assert.deepEqual(result, siteSurvey)

    })

    it('My Capbilities > BoM Scoping/Handling', async () => {
        await mycapabilities.clickOnCapability('BoM Scoping/Handling')
        let [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('BoM Scoping/Handling')
        if (result.length > 0) {
            const firstURL = new URL(result[0].URL);
            const baseUrl = `${firstURL.protocol}//${firstURL.hostname}`;
            result = result.map((func) => ({ ...func, URL: baseUrl }));
        }
        assert.deepEqual(functionUrls, BoMScopingUrl )
        assert.deepEqual(helpUrls, BoMScopingHelp)
        assert.deepEqual(response, BoMScopingRes)
        assert.deepEqual(result, BoMScoping)
        
    })


    it('My Capbilities > Supplier Purchase to Pay', async () => {
        await mycapabilities.clickOnCapability('Supplier Purchase to Pay')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Supplier Purchase to Pay')
        assert.deepEqual(functionUrls, sp2pUrl )
        assert.deepEqual(helpUrls, sp2pHelp)
        assert.deepEqual(response, sp2pRes)
        assert.deepEqual(result, sp2p)

    })

    it('My Capbilities > Configuration Script Generation', async () => {
        await mycapabilities.clickOnCapability('Configuration Script Generation')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Configuration Script Generation')
        assert.deepEqual(functionUrls, ConfigurationScriptGenerationzUrl )
        assert.deepEqual(helpUrls, ConfigurationScriptGenerationHelp)
        assert.deepEqual(response, ConfigurationScriptGenerationRes)
        assert.deepEqual(result, ConfigurationScriptGeneration)

    })

    it('My Capbilities > Audit', async () => {
        await mycapabilities.clickOnCapability('Audit')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Audit')
        assert.deepEqual(functionUrls, auditUrl )
        assert.deepEqual(helpUrls, auditHelp)
        assert.deepEqual(response, auditRes)
        assert.deepEqual(result, audit)
    })

    it('My Capbilities > OHS Management', async () => {
        await mycapabilities.clickOnCapability('OHS Management')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('OHS Management')
        assert.deepEqual(functionUrls, ohsUrl )
        assert.deepEqual(helpUrls, ohsHelp)
        assert.deepEqual(response, ohsRes)
        assert.deepEqual(result, ohs)

    })

    it('My Capbilities > Integration', async () => {
        await mycapabilities.clickOnCapability('Integration')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Integration')
        assert.deepEqual(functionUrls, integrationUrl )
        assert.deepEqual(helpUrls, integrationHelp)
        assert.deepEqual(response, integrationRes)
        assert.deepEqual(result, integration)
    })

    it('My Capbilities > Health Checks/Troubleshooting', async () => {
        await mycapabilities.clickOnCapability('Health Checks/Troubleshooting')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Health Checks/Troubleshooting')
        assert.deepEqual(functionUrls, HealthChecksTroubleshootingUrl )
        assert.deepEqual(helpUrls, HealthChecksTroubleshootingHelp)
        assert.deepEqual(response, HealthChecksTroubleshootingRes)
        assert.deepEqual(result, HealthChecksTroubleshooting)
    })

    it('My Capbilities > Acceptance', async () => {
        await mycapabilities.clickOnCapability('Acceptance')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Acceptance')
        assert.deepEqual(functionUrls, acceptanceUrl )
        assert.deepEqual(helpUrls, acceptanceHelp)
        assert.deepEqual(response, acceptanceRes)
        assert.deepEqual(result, acceptance)
    })

    it('My Capbilities > Quality', async () => {
        await mycapabilities.clickOnCapability('Quality')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Quality')
        assert.deepEqual(functionUrls, qualityUrl )
        assert.deepEqual(helpUrls, qualityHelp)
        assert.deepEqual(response, qualityRes)
        assert.deepEqual(result, quality)
    })

    it('My Capbilities > Knowledge', async () => {
        await mycapabilities.clickOnCapability('Knowledge')
        const [result, response, functionUrls, helpUrls] = await mycapabilities.launchSubFunctions()
        await mycapabilities.clickOnCapability('Knowledge')
        assert.deepEqual(functionUrls, knowledgeUrl )
        assert.deepEqual(helpUrls, knowledgeHelp)
        assert.deepEqual(response, knowledgeRes)
        assert.deepEqual(result, knowledge)
    })

})



