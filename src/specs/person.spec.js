import expect from '../libs/expect.js' 
import { get_auth, get_certi, get_certi_byperson, get_certi_id, get_certi_public_byperson, get_contact, get_contact_bypersonid, get_contact_id, get_contact_list, get_edu, get_edu_id, get_edu_personId, get_emphist, get_emphist_byPerson, get_emphist_id, get_emphist_public_byPerson, get_employee, get_employee_byPersonId, get_employee_id, get_employee_profilePhoto_attch, get_employee_profilePhoto_noattch, get_employee_search, get_employee_signature_attch, get_employee_signature_noattch, get_employee_sizeNumber, get_employee_subordinates, get_family, get_family_bypersonid, get_family_id, get_family_list, get_hiringStatus, get_personalDetail, get_project, get_project_byPerson, get_project_id, get_project_public_byPerson, get_rth, get_rth_config, get_rth_id, get_rth_list, get_training, get_training_bypersonId, get_training_id, get_training_public_bypersonId } from '../apis/person.apis.js'
import { person_certi_schema, person_contact_schema, person_edu_schema, person_emphist_schema, person_employee_schema, person_family_schema, person_hiringStatus_schema, person_project_schema, person_rth_schema, person_training_schema } from '../schemas/person.schema.js'

describe('TESTING SWAGGER API -- /person', function() {
    describe('/certi/ - Get Response /certi', function() {
        it('Check valid response status code /certi', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_certi(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_certi_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /certi/by-person/{personId}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_certi_byperson(accessToken, 84)
            
            expect(response.data).to.be.jsonSchema(person_certi_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /certi/public/by-person/{personId}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_certi_public_byperson(accessToken, 59)
            
            expect(response.data).to.be.jsonSchema(person_certi_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /certi/{id}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_certi_id(accessToken, 120)
            
            expect(response.data).to.be.jsonSchema(person_certi_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/contact/ - Get Response /contact', function() {
        it('Check valid response status code /contact', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_contact(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_contact_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /contact/bypersonid/{personId}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_contact_bypersonid(accessToken, 10)
            
            expect(response.data).to.be.jsonSchema(person_contact_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /contact/list/{size}/{number}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_contact_list(accessToken, 1, 10)
            
            expect(response.data).to.be.jsonSchema(person_contact_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /contact/{id}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_contact_id(accessToken, 1)
            
            expect(response.data).to.be.jsonSchema(person_contact_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/edu/ - Get Response /edu', function() {
        it('Check valid response status code /edu', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_edu(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_edu_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /edu/{id}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_edu_id(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_edu_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /edu/{personId}/{tahunSelesai}/{jenjang}/{nama}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_edu_personId(accessToken, 15, 2024, 'S1', 'OXFORD')
            
            expect(response.data).to.be.jsonSchema(person_edu_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/employee/ - Get Response /employee', function() {
        it('Check valid response status code /employee', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_employee_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /employee/bypersonid/{id}', async function() {
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee_byPersonId(accessToken, 47)
            
            expect(response.data).to.be.jsonSchema(person_employee_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /employee/profilephoto/{tenantId}/{userid}/attch', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee_profilePhoto_attch(accessToken, '9999', 47)
            // error 400 Bad Request
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /employee/profilephoto/{tenantId}/{userid}/noattch', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee_profilePhoto_noattch(accessToken, '9999', 47)
            // error 400 Bad Request
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /employee/search/{keyword}/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee_search(accessToken, 'e', 1, 1)
            
            expect(response.data).to.be.jsonSchema(person_employee_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /employee/signature/{tenantId}/{userid}/attch', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee_signature_attch(accessToken, '9999', 47)
            // error 400 Bad Request
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /employee/signature/{tenantId}/{userid}/noattch', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee_signature_noattch(accessToken, '9999', 47)
            // error 400 Bad Request
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /employee/subordinates/{tenantId}/{userid}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee_subordinates(accessToken, '9999', 47)
            // error 400 Bad Request
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /employee/{id}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee_id(accessToken, 47)
            // error 400 Bad Request
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /employee/{size}/{number}', async function() {
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_employee_sizeNumber(accessToken, 1, 47)
            
            expect(response.data).to.be.jsonSchema(person_employee_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/personaldetail/ - Get Response /personaldetail', function() {
        it('Check valid response status code /personaldetail/bypersonid/{id}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_personalDetail(accessToken, 47)
            
            expect(response.data).to.be.jsonSchema(person_employee_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/emphist/ - Get Response /emphist', function() {
        it('Check valid response status code /emphist', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_emphist(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_emphist_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /emphist/by-person/{personId}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_emphist_byPerson(accessToken, 11)
            
            expect(response.data).to.be.jsonSchema(person_emphist_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /emphist/public/by-person/{personId}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_emphist_public_byPerson(accessToken, 27)
            
            expect(response.data).to.be.jsonSchema(person_emphist_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /emphist/{id}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_emphist_id(accessToken, 3)
            
            expect(response.data).to.be.jsonSchema(person_emphist_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/family/ - Get Response /family', function() {
        it('Check valid response status code /family', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_family(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_family_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /family/bypersonid/{personId}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_family_bypersonid(accessToken, 89)
            
            expect(response.data).to.be.jsonSchema(person_family_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /family/list/{size}/{number}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_family_list(accessToken, 1, 10)
            
            expect(response.data).to.be.jsonSchema(person_family_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /family/{id}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_family_id(accessToken, 1)
            // error 400 Bad Request
            expect(response.data).to.be.jsonSchema(person_family_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/hiringstatus/ - Get Response /hiringstatus', function() {
        it('Check valid response status code /hiringstatus', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_hiringStatus(accessToken, 9999, 1)
            
            expect(response.data).to.be.jsonSchema(person_hiringStatus_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/project/ - Get Response /project', function() {
        it('Check valid response status code /project', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_project(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_project_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /project/by-person/{personId}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_project_byPerson(accessToken, 11)
            
            expect(response.data).to.be.jsonSchema(person_project_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /project/public/by-person/{personId}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_project_public_byPerson(accessToken, 18)
            
            expect(response.data).to.be.jsonSchema(person_project_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /project/{id}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_project_id(accessToken, 5)
            
            expect(response.data).to.be.jsonSchema(person_project_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/rth/ - Get Response /rth', function() {
        it('Check valid response status code /rth', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_rth(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_rth_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /rth/config/{name}/{user}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_rth_config(accessToken, 'test', 'qq')
            
            expect(response.status).to.equal(204)
        })
        it('Check valid response status code /rth/list/{size}/{number}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_rth_list(accessToken, 1, 11)
            
            expect(response.data).to.be.jsonSchema(person_rth_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /rth/{id}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_rth_id(accessToken, 17)
            
            expect(response.data).to.be.jsonSchema(person_rth_schema)
            expect(response.status).to.equal(200)
        })
    })
    describe('/training/ - Get Response /training', function() {
        it('Check valid response status code /training', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_training(accessToken)
            
            expect(response.data).to.be.jsonSchema(person_training_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /training/by-person/{personId}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_training_bypersonId(accessToken, 9)
            
            expect(response.data).to.be.jsonSchema(person_training_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /training/public/by=person/{personId}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_training_public_bypersonId(accessToken, 9)
            
            expect(response.data).to.be.jsonSchema(person_training_schema)
            expect(response.status).to.equal(200)
        })
        it('Check valid response status code /training/{id}', async function(){
            this.timeout(5000)
            const authResponse = await get_auth()
            const accessToken = authResponse.data.access_token
            const response = await get_training_id(accessToken, 9)
            // error 400, tidak menemukan id available
            expect(response.data).to.be.jsonSchema(person_training_schema)
            expect(response.status).to.equal(200)
        })
    })
})