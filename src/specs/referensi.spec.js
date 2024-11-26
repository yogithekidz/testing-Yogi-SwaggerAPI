import expect from '../libs/expect.js' 
import { get_industry, get_industry_name, get_job_role, get_job_role_byid, get_job_role_exact, get_job_role_industry, get_job_role_name, get_skill_industry_name, get_skill_name, get_swtool, get_swtool_byID, get_swtool_name } from '../apis/referensi.apis.js'
import { referensi_industry_schema, referensi_complete_schema, referensi_schema } from '../schemas/referensi.schema.js'

describe('TESTING SWAGGER API -- /referensi', function(){
    describe('/industry/ - Get Response /industry', function (){
        it('Check valid response status code /industry', async function(){
            const response = await get_industry()
            expect(response.status).to.equal(200)
            expect(response.data).to.be.jsonSchema(referensi_industry_schema)
        })
        it('Check valid response status code /industry/{name}', async function(){
            const response = await get_industry_name('Banking')
            expect(response.status).to.equal(200)
            expect(response.data).to.be.jsonSchema(referensi_industry_schema)
        })

    })
    describe('/jobrole/ - Get Response /jobrole', function(){
        it('Check valid response status code /jobrole', async function(){
            const response = await get_job_role()
            expect(response.status).to.equal(200)
            expect(response.data).to.be.jsonSchema(referensi_complete_schema)
        })
        it('Check valid response status code /jobrole/byid/{id}', async function(){
            const response = await get_job_role_byid(1)
            expect(response.data).to.be.jsonSchema(referensi_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /jobrole/exact/{name}', async function(){
            const response = await get_job_role_exact('programming')
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /jobrole/{industry}/{name}', async function(){
            const response = await get_job_role_industry('Technology', 'programming')
            expect(response.status).to.equal(200)
            expect(response.data).to.be.jsonSchema(referensi_schema)
        })
        it('Check valid response status code /jobrole/{name}', async function(){
            const response = await get_job_role_name('programming')
            expect(response.data).to.be.jsonSchema(referensi_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/skill/ - Get Response /skill', function(){
        it('Check valid response status code /skill/{industry}/{name}', async function(){
            const response = await get_skill_industry_name('Technology', 'Programming')
            expect(response.data).to.be.jsonSchema(referensi_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /skill/{name}', async function(){
            const response = await get_skill_name('Banking')
            expect(response.data).to.be.jsonSchema(referensi_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/swtool/ - Get Response /swtool', function(){
        it('Check valid response status code /swtool', async function(){
            const response = await get_swtool()
            expect(response.data).to.be.jsonSchema(referensi_complete_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /swtool/byID', async function(){
            const response = await get_swtool_byID(1)
            expect(response.data).to.be.jsonSchema(referensi_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /swtool/name', async function(){
            const response = await get_swtool_name('Swift')
            expect(response.data).to.be.jsonSchema(referensi_schema)
            expect(response.status).to.equal(200)
        })
    })
})
