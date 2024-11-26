import expect from '../libs/expect.js'
import { get_auth, get_CompanyContacts, get_CompanyContacts_ID, get_CompanyD, get_CompanyD_ID, get_companyh, get_companyh_id, get_compdoc_bycompanyheaderid, get_compdoc_id, get_config, get_config_id, get_config_list, get_config_name_user, get_invitinguser, get_reference_type, get_salgrade_byid, get_salgrade_nominal, get_service } from '../apis/master.apis.js'
import { master_company_schema, master_companyd_schema, master_companyh_schema, master_compdoc_byheaderid_schema, master_config_name_schema, master_config_schema, master_reference_schema, master_salgrade_schema, master_service_schema } from '../schemas/master.schema.js'

describe('TESTING SWAGGER API -- /master', function(){
    describe('/CompanyContact/ - Get Response /companycontac', function() {
        it('Check Valid Response Status Get /companycontact', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_CompanyContacts(accessToken)
            
            expect(dataResponse.data).to.be.jsonSchema(master_company_schema)
            expect(dataResponse.status).to.equal(200)

        })
        it('Check Valid Response Status Get /companycontact/{ID}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_CompanyContacts_ID(accessToken, 1)

            expect(dataResponse.data).to.be.jsonSchema(master_company_schema)
            expect(dataResponse.status).to.equal(200)
        })
    })
    describe('/CompanyD/ - Get Response /companyd', function () {
        it('Check Valid Response Status Get /companyd', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_CompanyD(accessToken)

            expect(dataResponse.data).to.be.jsonSchema(master_companyd_schema)
            expect(dataResponse.status).to.equal(200)
        })
        it('Check Valid Response Status Get /companyd/{id}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_CompanyD_ID(accessToken, 13)

            expect(dataResponse.data).to.be.jsonSchema(master_companyd_schema)
            expect(dataResponse.status).to.equal(200)
        })
    })
    describe('/CompanyH/ - Get Response /companyh', function() {
        it('Check Valid Response Status Get /companyh', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_companyh(accessToken)

            expect(dataResponse.data).to.be.jsonSchema(master_companyh_schema)
            expect(dataResponse.status).to.equal(200) 
        })
        it('Check Valid Response Status Get /companyh/{id}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_companyh_id(accessToken, 10)

            expect(dataResponse.data).to.be.jsonSchema(master_companyh_schema)
            expect(dataResponse.status).to.equal(200)
        })
    })
    describe('/Config/ - Get Response /config', function() {
        it('Check Valid Response Status Get /config', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_config(accessToken)

            expect(dataResponse.data).to.be.jsonSchema(master_config_schema)
            expect(dataResponse.status).to.equal(200)
        })
        it('Check Valid Response Status Get /config/list/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_config_list(accessToken, 1, 10)

            expect(dataResponse.data).to.be.jsonSchema(master_config_schema)
            expect(dataResponse.status).to.equal(200)
        })
        it('Check Valid Response Status Get /config/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_config_id(accessToken, 11)

            expect(dataResponse.status).to.equal(200)
        })
        it('Check Valid Response Status Get /config/{name}/{user]', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_config_name_user(accessToken, 'inviting.user.validation', '_ALL')

            expect(dataResponse.data).to.be.jsonSchema(master_config_name_schema)
            expect(dataResponse.status).to.equal(200)
        })
    })
    describe('/reference/ - Get Response /reference', function() {
        it('Check Valid Response Status Get /reference/{type}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_reference_type(accessToken, 'HIRING_REFERENCE_SOURCE')

            expect(dataResponse.data).to.be.jsonSchema(master_reference_schema)
            expect(dataResponse.status).to.equal(200)
        })
    })
    describe('/compdoc/ - Get Response /compdoc', function() {
        it('Check Valid Response Status Get /compdoc/a/{tenantId}/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_compdoc_id(accessToken, '9999', 1)

            expect(dataResponse.status).to.equal(200)
        })
        it('Check Valid Response Status Get /compdoc/bycompanyheaderid/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_compdoc_bycompanyheaderid(accessToken, 1)
            
            expect(dataResponse.data).to.be.jsonSchema(master_compdoc_byheaderid_schema)
            expect(dataResponse.status).to.equal(200)
        })
        it('Check Valid Response Status Get /compdoc/{tenantId}/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_compdoc_id(accessToken, '9999', 1)

            expect(dataResponse.status).to.equal(200)
        })
    })
    describe('/invitinguser/ - Get Response /invitinguser', function() {
        it('Check Valid Response Status Get /invitinguser/{userid}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_invitinguser(accessToken, 1)

            expect(dataResponse.status).to.equal(204)
        })
    })
    describe('/salgrade/ - Get Response /salarygradeuser', function() {
        it('Check Valid Response Status Get /salgrade/byid/{type}/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_salgrade_byid(accessToken, 'RECRUITMENT_SALARY_GRADE', 1)

            expect(dataResponse.data).to.be.jsonSchema(master_salgrade_schema)
            expect(dataResponse.status).to.equal(200)
        })
        it('Check Valid Response Status Get /salgrade/{type}/{nominal}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_salgrade_nominal(accessToken, 'RECRUITMENT_SALARY_GRADE', 10000)

            expect(dataResponse.data).to.be.jsonSchema(master_salgrade_schema)
            expect(dataResponse.status).to.equal(200)
        })
    })
    describe('/service/ - Get Response /service', function() {
        it('Check Valid Response Status Get /service', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const dataResponse = await get_service(accessToken)

            expect(dataResponse.data).to.be.jsonSchema(master_service_schema)
            expect(dataResponse.status).to.equal(200)
        })
    })
})