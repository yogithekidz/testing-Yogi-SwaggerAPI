import axiosInstance from "../libs/axiosInstance.js"

const tenantIdHeader = {
    'X-TenantID': '9999'
}

const params = {
    page: 1,
    q: 'a',
    size: 10,
}
export function get_industry(){
    return axiosInstance.get('/referensi/industry', { headers: tenantIdHeader })
}

export function get_industry_name(industryName){
    return axiosInstance.get('/referensi/industry/' + industryName, { headers: tenantIdHeader })
}

export function get_job_role() {
    return axiosInstance.get('/referensi/jobrole', { 
        params,
        headers: tenantIdHeader })
}
export function get_job_role_byid(id) {
    return axiosInstance.get('/referensi/jobrole/byid/' + id, { 
        headers: tenantIdHeader })
}
export function get_job_role_exact(name) {
    return axiosInstance.get('/referensi/jobrole/exact/' + name, { 
        headers: tenantIdHeader })
}
export function get_job_role_industry(industryName, name) {
    return axiosInstance.get('/referensi/jobrole/exact/' + industryName, '/', + name, { 
        headers: tenantIdHeader })
}
export function get_job_role_name(name) {
    return axiosInstance.get('/referensi/jobrole/' + name, { 
        headers: tenantIdHeader })
}

export function get_skill_industry_name(industry, skillName) {
    return axiosInstance.get('/referensi/skill/' + industry, '/', + skillName, { headers: tenantIdHeader })
}

export function get_skill_name(skillName) {
    return axiosInstance.get('/referensi/skill/' + skillName, { headers: tenantIdHeader })
}

export function get_swtool() {
    return axiosInstance.get('/referensi/swtool', { params, headers: tenantIdHeader })
}

export function get_swtool_byID(id) {
    return axiosInstance.get('/referensi/swtool/byid/' + id , { headers: tenantIdHeader })
}

export function get_swtool_name(name) {
    return axiosInstance.get('/referensi/swtool/' + name , { headers: tenantIdHeader })
}