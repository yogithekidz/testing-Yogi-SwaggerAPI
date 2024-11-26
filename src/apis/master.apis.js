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


export function get_CompanyContacts(accessToken) {
    return axiosInstance.get('/master/companycontact', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_CompanyContacts_ID(accessToken, id) {
    return axiosInstance.get('/master/companycontact/' + id , {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_CompanyD (accessToken) {
    return axiosInstance.get('/master/companyd/', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_CompanyD_ID(accessToken, id) {
    return axiosInstance.get('/master/companyd/' + id , {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_companyh(accessToken) {
    return axiosInstance.get('/master/companyh', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_companyh_id(accessToken, id) {
    return axiosInstance.get('/master/companyh/' + id, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_config(accessToken) {
    return axiosInstance.get('/master/config', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_config_list(accessToken, size, number) {
    return axiosInstance.get(`/master/config/list/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_config_id(accessToken, id) {
    return axiosInstance.get(`/master/config/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_config_name_user(accessToken, name, user) {
    return axiosInstance.get(`/master/config/${name}/${user}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_reference_type(accessToken, type) {
    return axiosInstance.get(`/master/reference/${type}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_compdoc_id(accessToken, tenantId, id) {
    return axiosInstance.get(`/master/compdoc/a/${tenantId}/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_compdoc_bycompanyheaderid(accessToken, id) {
    return axiosInstance.get(`/master/compdoc/bycompanyheaderid/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_compdoc_tenantid(accessToken, tenantId, id) {
    return axiosInstance.get(`/master/compdoc/${tenantId}/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_invitinguser(accessToken, userid) {
    return axiosInstance.get(`/master/invitinguser/${userid}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_salgrade_byid(accessToken, type, id) {
    return axiosInstance.get(`/master/salgrade/byid/${type}/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_salgrade_nominal(accessToken, type, nominal) {
    return axiosInstance.get(`/master/salgrade/${type}/${nominal}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_service(accessToken) {
    return axiosInstance.get(`/master/service`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

