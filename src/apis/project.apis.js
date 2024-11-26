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

export function get_pca(accessToken) {
    return axiosInstance.get('/project/pca', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pca_allpending(accessToken, creator, size, number) {
    return axiosInstance.get(`/project/pca/allpending/${creator}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pca_id(accessToken, id) {
    return axiosInstance.get(`/project/pca/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pca_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/project/pca/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaItem(accessToken) {
    return axiosInstance.get(`/project/pcaitem`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaItem_byid(accessToken, projectCostingId, itemNumber) {
    return axiosInstance.get(`/project/pcaitem/byid/${projectCostingId}/${itemNumber}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaItem_pcid(accessToken, projectCostingId, size, number) {
    return axiosInstance.get(`/project/pcaitem/byidpcid/${projectCostingId}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaItem_id(accessToken, id) {
    return axiosInstance.get(`/project/pcaitem/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaItem_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/project/pcaitem/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSubItem(accessToken) {
    return axiosInstance.get(`/project/pcasubitem`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSubItem_all(accessToken, projectCostingId) {
    return axiosInstance.get(`/project/pcasubitem/all/${projectCostingId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSubItem_all_sizeNumber(accessToken, projectCostingId, size, number) {
    return axiosInstance.get(`/project/pcasubitem/all/${projectCostingId}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSubItem_id(accessToken, id) {
    return axiosInstance.get(`/project/pcasubitem/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSubItem_itemNumber(accessToken, projectCostingId, itemNumber, subItemName) {
    return axiosInstance.get(`/project/pcasubitem/${projectCostingId}/${itemNumber}/${subItemName}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSubItem_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/project/pcasubitem/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSupportDoc(accessToken) {
    return axiosInstance.get(`/project/pca-supportdoc`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSupportDoc_get(accessToken, tenantId, attachmentId) {
    return axiosInstance.get(`/project/pca-supportdoc/get/${tenantId}/${attachmentId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSupportDoc_id(accessToken, id) {
    return axiosInstance.get(`/project/pca-supportdoc/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_pcaSupportDoc_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/project/pca-supportdoc/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}