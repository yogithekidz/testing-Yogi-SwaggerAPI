import { get_auth, get_fdp, get_fdp_generatePdf, get_fdp_id, get_fdp_list, get_hello } from '../apis/hr.apis.js'
import expect from '../libs/expect.js' 
import { hr_fdp_schema } from '../schemas/hr.schema.js'

describe('TESTING SWAGGER API -- /hr', function() {
    describe('/fdp/ - Get Response /fdp', function() {
        it('Check valid response status code /fdp', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_fdp(accessToken)
            
            expect(response.data).to.be.jsonSchema(hr_fdp_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /fdp/list/{size}/{number}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_fdp_list(accessToken, 1, 10)
            
            expect(response.data).to.be.jsonSchema(hr_fdp_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /fdp/list/generate-pdf/{placementCostingId}/{personId}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_fdp_generatePdf(accessToken, 10, 1)
            
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /fdp/{id}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_fdp_id(accessToken, 2)
            
            expect(response.data).to.be.jsonSchema(hr_fdp_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/hello/ - Get Response /hello', function() {
        it('Check valid response status code /hello', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_hello(accessToken)
            
            expect(response.status).to.equal(200)
        })
    })
})