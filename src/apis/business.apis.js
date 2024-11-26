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

export function get_quotation(accessToken) {
    return axiosInstance.get('/business/quotation', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotation_all(accessToken, size, number) {
    return axiosInstance.get(`/business/quotation/all/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotation_allpending_creator(accessToken, creator, size, number) {
    return axiosInstance.get(`/business/quotation/allpending/${creator}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotation_allpending(accessToken, size, number) {
    return axiosInstance.get(`/business/quotation/allpending/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotation_byompanyheader(accessToken, companyHeaderId, size, number) {
    return axiosInstance.get(`/business/quotation/bycompanyheader/${companyHeaderId}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotation_id(accessToken, id) {
    return axiosInstance.get(`/business/quotation/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotation_size(accessToken, size, number) {
    return axiosInstance.get(`/business/quotation/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotationItem(accessToken) {
    return axiosInstance.get(`/business/quotation-item`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotationItem_byquotationid(accessToken, quotationid, size, number) {
    return axiosInstance.get(`/business/quotation-item/byquotationid/${quotationid}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotationItem_detail(accessToken, quotationid, number) {
    return axiosInstance.get(`/business/quotation-item/detail/${quotationid}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotationItem_id(accessToken, id) {
    return axiosInstance.get(`/business/quotation-item/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_quotationItem_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/business/quotation-item/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_tac(accessToken) {
    return axiosInstance.get(`/business/tac`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_tac_id(accessToken, id) {
    return axiosInstance.get(`/business/tac/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_tac_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/business/tac/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}