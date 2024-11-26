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


export function get_fdp(accessToken) {
    return axiosInstance.get('/hr/fdp', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_fdp_list(accessToken, size, number) {
    return axiosInstance.get(`/hr/fdp/list/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_fdp_generatePdf(accessToken, placementCostingId, personId) {
    return axiosInstance.get(`/hr/fdp/public/generate-pdf/${placementCostingId}/${personId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_fdp_id(accessToken, id) {
    return axiosInstance.get(`/hr/fdp/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_hello(accessToken) {
    return axiosInstance.get('/hr/hello', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}