import { get_auth, get_pca, get_pca_allpending, get_pca_id, get_pca_sizeNumber, get_pcaItem, get_pcaItem_byid, get_pcaItem_id, get_pcaItem_pcid, get_pcaItem_sizeNumber, get_pcaSubItem, get_pcaSubItem_all, get_pcaSubItem_all_sizeNumber, get_pcaSubItem_itemNumber, get_pcaSubItem_sizeNumber, get_pcaSupportDoc, get_pcaSupportDoc_get, get_pcaSupportDoc_id, get_pcaSupportDoc_sizeNumber } from '../apis/project.apis.js'
import expect from '../libs/expect.js'
import { project_pca_schema, project_pcaitem_schema, project_pcasubitem_schema, project_pcaSupportDoc_schema } from '../schemas/project.schema.js'

describe('TESTING SWAGGER API -- /project', function() {
    describe('/pca/ - Get Response /pca', function() {
        it('Check valid response status code /pca', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pca(accessToken)

            expect(response.data).to.be.jsonSchema(project_pca_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pca/allpending/{creator}/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pca_allpending(accessToken, 'dummy@prosigmaka.com', 1,1)

            expect(response.data).to.be.jsonSchema(project_pca_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pca/id', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pca_id(accessToken, 13)

            expect(response.data).to.be.jsonSchema(project_pca_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pca/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pca_sizeNumber(accessToken, 1, 1)

            expect(response.data).to.be.jsonSchema(project_pca_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/pcaitem/ - Get Response /pcaitem', function() {
        it('Check valid response status code /pcaitem', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaItem(accessToken)
    
            expect(response.data).to.be.jsonSchema(project_pcaitem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pcaitem/byid', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaItem_byid(accessToken, 17, 1)
    
            expect(response.data).to.be.jsonSchema(project_pcaitem_schema)
            expect(response.status).to.equal(200)
            })
        it('Check valid response status code /pcaitem/byidpcid', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaItem_pcid(accessToken, 21, 1, 1)
    
            expect(response.data).to.be.jsonSchema(project_pcaitem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pcaitem/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaItem_id(accessToken, 19)
                // error 400
            expect(response.data).to.be.jsonSchema(project_pcaitem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pcaitem/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaItem_sizeNumber(accessToken, 1, 1)
                // error 400
            expect(response.data).to.be.jsonSchema(project_pcaitem_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/pcasubitem/ - Get Response /pcasubitem', function() {
        it('Check valid response status code /pcasubitem', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSubItem(accessToken)
    
            expect(response.data).to.be.jsonSchema(project_pcasubitem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pcasubitem/all', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSubItem_all(accessToken, 20)
    
            expect(response.data).to.be.jsonSchema(project_pcasubitem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pcasubitem/all/{projectCostingId}/{Size}/{Number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSubItem_all_sizeNumber(accessToken, 18, 1, 1)
    
            expect(response.data).to.be.jsonSchema(project_pcasubitem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pcasubitem/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSubItem_all_sizeNumber(accessToken, 1)
            // kode 500
            expect(response.data).to.be.jsonSchema(project_pcasubitem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pcasubitem/{projectCostingId}/{itemNumber}/{subItemName}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSubItem_itemNumber(accessToken, 17, 1, 'laptop')
            // kode 500
            expect(response.data).to.be.jsonSchema(project_pcasubitem_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pcasubitem/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSubItem_sizeNumber(accessToken, 1, 1)
            // kode 500
            expect(response.data).to.be.jsonSchema(project_pcasubitem_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/pca-supportdoc/ - Get Response /pca-supportdoc', function() {
        it('Check valid response status code /pca-supportdoc', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSupportDoc(accessToken)

            expect(response.data).to.be.jsonSchema(project_pcaSupportDoc_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pca-supportdoc/get', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSupportDoc_get(accessToken, '9999', 135)

            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pca-supportdoc/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSupportDoc_id(accessToken, 1)

            expect(response.data).to.be.jsonSchema(project_pcaSupportDoc_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /pca-supportdoc/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_pcaSupportDoc_sizeNumber(accessToken, 1, 1)

            expect(response.data).to.be.jsonSchema(project_pcaSupportDoc_schema)
            expect(response.status).to.equal(200)
        })
    })
})
