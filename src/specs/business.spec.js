import expect from '../libs/expect.js'
import { get_auth, get_quotation, get_quotation_allpending, get_quotation_allpending_creator, get_quotation_byompanyheader, get_quotation_id, get_quotation_size, get_quotationItem, get_quotationItem_byquotationid, get_quotationItem_detail, get_quotationItem_sizeNumber, get_tac, get_tac_id, get_tac_sizeNumber } from '../apis/business.apis.js'
import { business_quotation_allpending_schema, business_quotation_schema, business_quotationItem_schema, business_tac_schema } from '../schemas/business.schema.js'

describe('TESTING SWAGGER API -- /business', function() {
    describe('/quotation/ - Get Response /quotation', function() {
        it('Check valid response status code /quotation', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotation(accessToken)
            
            expect(response.data).to.be.jsonSchema(business_quotation_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation/all/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotation(accessToken, 1, 1)
            
            expect(response.data).to.be.jsonSchema(business_quotation_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation/allpending/{creator}/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotation_allpending_creator(accessToken, 'dummy@prosigmaka.com', 1, 1)
            
            expect(response.data).to.be.jsonSchema(business_quotation_allpending_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation/allpending/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotation_allpending(accessToken, 1, 1)
            
            expect(response.data).to.be.jsonSchema(business_quotation_allpending_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation/bycompanyheader/{companyHeaderId}/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotation_byompanyheader(accessToken, 9999, 1, 1)
            
            expect(response.data).to.be.jsonSchema(business_quotation_allpending_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotation_id(accessToken, 16)
            
            expect(response.data).to.be.jsonSchema(business_quotation_allpending_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotation_size(accessToken, 1, 1)
            // Internal Server Error 500
            expect(response.data).to.be.jsonSchema(business_quotation_allpending_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/quotation-item/ - Get Response /quotation-item', function() {
        it('Check valid response status code /quotation-item', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotationItem(accessToken)

            expect(response.data).to.be.jsonSchema(business_quotationItem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation-item/byquotationid/{quotationid}/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotationItem_byquotationid(accessToken, 16, 1, 1)

            expect(response.data).to.be.jsonSchema(business_quotationItem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation-item/detail/{quotationid}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotationItem_detail(accessToken, 34, 1)

            expect(response.data).to.be.jsonSchema(business_quotationItem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation-item/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotationItem_detail(accessToken, 35)
            // error 500
            expect(response.data).to.be.jsonSchema(business_quotationItem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /quotation-item/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_quotationItem_sizeNumber(accessToken, 1,1)

            expect(response.data).to.be.jsonSchema(business_quotationItem_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/tac/ - Get Response /tac', function() {
        it('Check valid response status code /tac', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_tac(accessToken)

            expect(response.data).to.be.jsonSchema(business_tac_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /tac/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_tac_id(accessToken, 3)

            expect(response.data).to.be.jsonSchema(business_tac_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /tac/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_tac_sizeNumber(accessToken, 1,1)

            expect(response.data).to.be.jsonSchema(business_tac_schema)
            expect(response.status).to.equal(200)
        })
    })
})