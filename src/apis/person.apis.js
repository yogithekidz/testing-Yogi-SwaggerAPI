import axiosInstance from "../libs/axiosInstance.js"

const tenantIdHeader = {
    'X-TenantID': '9999'
}

const authBody = {
    username: 'dummy@prosigmaka.com',
    password: 'dummypsm',
}

export function get_auth() {
    return axiosInstance.post('/auth/auth/login', authBody, { headers: tenantIdHeader })
}


export function get_certi(accessToken) {
    return axiosInstance.get('/person/certi', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_certi_byperson(accessToken, personId) {
    return axiosInstance.get(`/person/certi/by-person/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_certi_public_byperson(accessToken, personId) {
    return axiosInstance.get(`/person/certi/public/by-person/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_certi_id(accessToken, id) {
    return axiosInstance.get(`/person/certi/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_contact(accessToken) {
    return axiosInstance.get('/person/contact', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_contact_bypersonid(accessToken, personId) {
    return axiosInstance.get(`/person/contact/bypersonid/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_contact_list(accessToken, size, number) {
    return axiosInstance.get(`/person/contact/list/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_contact_id(accessToken, id) {
    return axiosInstance.get(`/person/contact/byid/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_edu(accessToken) {
    return axiosInstance.get('/person/edu', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_edu_id(accessToken, id) {
    return axiosInstance.get(`/person/edu/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_edu_personId(accessToken, personId, tahunSelesai, jenjang, nama) {
    return axiosInstance.get(`/person/edu/${personId}/${tahunSelesai}/${jenjang}/${nama}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee(accessToken) {
    return axiosInstance.get('/person/employee', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee_byPersonId(accessToken, id) {
    return axiosInstance.get(`/person/employee/bypersonid/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee_profilePhoto_attch(accessToken, tenantId, userid) {
    return axiosInstance.get(`/person/employee/profilephoto/${tenantId}/${userid}/attch`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee_profilePhoto_noattch(accessToken, tenantId, userid) {
    return axiosInstance.get(`/person/employee/profilephoto/${tenantId}/${userid}/attch`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee_search(accessToken, keyword, size, number) {
    return axiosInstance.get(`/person/employee/search/${keyword}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee_signature_attch(accessToken, tenantId, userid) {
    return axiosInstance.get(`/person/employee/signature/${tenantId}/${userid}/attch`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee_signature_noattch(accessToken, tenantId, userid) {
    return axiosInstance.get(`/person/employee/signature/${tenantId}/${userid}/noattch`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee_subordinates(accessToken, tenantId, userid) {
    return axiosInstance.get(`/person/employee/subordinates/${tenantId}/${userid}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee_id(accessToken, id) {
    return axiosInstance.get(`/person/employee/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_employee_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/person/employee/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_personalDetail(accessToken, id) {
    return axiosInstance.get(`/person/personaldetail/bypersonid/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_emphist(accessToken) {
    return axiosInstance.get(`/person/emphist`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_emphist_byPerson(accessToken, personId) {
    return axiosInstance.get(`/person/emphist/by-person/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_emphist_public_byPerson(accessToken, personId) {
    return axiosInstance.get(`/person/emphist/public/by-person/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_emphist_id(accessToken, id) {
    return axiosInstance.get(`/person/emphist/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_family(accessToken) {
    return axiosInstance.get(`/person/family`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_family_bypersonid(accessToken, personId) {
    return axiosInstance.get(`/person/family/bypersonid/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_family_list(accessToken, size, number) {
    return axiosInstance.get(`/person/family/list/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_family_id(accessToken, id) {
    return axiosInstance.get(`/person/family/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_hiringStatus(accessToken, tenantId, personId) {
    return axiosInstance.get(`/person/hiringstatus/${tenantId}/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_project(accessToken) {
    return axiosInstance.get(`/person/project`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_project_byPerson(accessToken, personId) {
    return axiosInstance.get(`/person/project/by-person/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_project_public_byPerson(accessToken, personId) {
    return axiosInstance.get(`/person/project/public/by-person/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_project_id(accessToken, id) {
    return axiosInstance.get(`/person/project/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_rth(accessToken) {
    return axiosInstance.get(`/person/rth`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_rth_config(accessToken, name, user) {
    return axiosInstance.get(`/person/rth/config/${name}/${user}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_rth_list(accessToken, size, number) {
    return axiosInstance.get(`/person/rth/list/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_rth_id(accessToken, id) {
    return axiosInstance.get(`/person/rth/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_training(accessToken) {
    return axiosInstance.get(`/person/training`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_training_bypersonId(accessToken, personId) {
    return axiosInstance.get(`/person/training/by-person/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_training_public_bypersonId(accessToken, personId) {
    return axiosInstance.get(`/person/training/public/by-person/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_training_id(accessToken, id) {
    return axiosInstance.get(`/person/training/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}