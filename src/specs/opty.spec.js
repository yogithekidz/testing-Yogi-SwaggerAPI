import expect from '../libs/expect.js'
import { get_auth, get_lead, get_lead_details, get_lead_details_page, get_lead_id, get_lead_sizeNumber, get_leadactivity, get_testschedule, get_testschedule_id, get_testschedule_manpowerSolutionOpportunityId, get_testschedule_sizeNumber, get_v2_lead, get_v2_lead_details, get_v2_lead_detailsPage, get_v2_lead_id, get_v2_lead_sizeNumber, } from '../apis/opty.apis.js'
import { opty_lead_schema, opty_leadactivity_schema, opty_testSchedule_schema } from '../schemas/opty.schema.js'

describe('TESTING SWAGGER API -- /opty', function () {
    describe('/testschedule/ - Get Response /testschedule', function () {
        it('Check valid response status code /testschedule', async function () {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_testschedule(accessToken, 1, 1)

            expect(response.data).to.be.jsonSchema(opty_testSchedule_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /testschedule/bystatus/', async function () {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_testschedule(accessToken, 47, 'DONE', 1, 1)

            expect(response.data).to.be.jsonSchema(opty_testSchedule_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /testschedule/{id}', async function () {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_testschedule_id(accessToken, 1)
          // error 4000
            expect(response.data).to.be.jsonSchema(opty_testSchedule_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /testschedule/{manpowerSolutionOpportunityId}/{size}/{number}', async function () {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_testschedule_manpowerSolutionOpportunityId(accessToken, 41, 1, 1)

            expect(response.data).to.be.jsonSchema(opty_testSchedule_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /testschedule/{size}/{number}', async function () {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_testschedule_sizeNumber(accessToken, 1, 1)

            expect(response.data).to.be.jsonSchema(opty_testSchedule_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/leadactivity/ - Get Response /leadactivity', function() {
        it('Check valid response status code /leadactivity', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_leadactivity(accessToken, '9999', 1,1)

            expect(response.data).to.be.jsonSchema(opty_leadactivity_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/lead/ - Get Response /lead', function() {
        it('Check valid response status code /lead', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_lead(accessToken)

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /lead/details/page', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_lead_details_page(accessToken, '9999', 1, 1)

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /lead/details/', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_lead_details(accessToken, '9999')

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /lead/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_lead_id(accessToken, 14)

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /lead/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_lead_sizeNumber(accessToken, 1, 1)

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /v2/lead', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_v2_lead(accessToken)

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /v2/lead/details/page', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_v2_lead_detailsPage(accessToken, '9999', 1, 1)

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /v2/lead/details', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_v2_lead_details(accessToken, '9999')

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /v2/lead/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_v2_lead_id(accessToken, 15)

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /v2/lead/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_v2_lead_sizeNumber(accessToken, 1, 1)

            expect(response.data).to.be.jsonSchema(opty_lead_schema)
            expect(response.status).to.equal(200)
        })
    })
})
