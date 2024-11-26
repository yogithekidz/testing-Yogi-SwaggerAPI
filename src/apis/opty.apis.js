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

export function get_testschedule(accessToken) {
    return axiosInstance.get('/opty/testschedule', {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_testschedule_bystatus(accessToken, manpowerSolutionOpportunityId, status, size, number) {
    return axiosInstance.get(`/opty/testschedule/bystatus/${manpowerSolutionOpportunityId}/${status}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_testschedule_id(accessToken, id) {
    return axiosInstance.get(`/opty/testschedule/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_testschedule_manpowerSolutionOpportunityId(accessToken, manpowerSolutionOpportunityId, size, number) {
    return axiosInstance.get(`/opty/testschedule/${manpowerSolutionOpportunityId}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_testschedule_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/opty/testschedule/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_leadactivity(accessToken, opportunityHeaderId, size, number) {
    return axiosInstance.get(`/opty/leadactivity/${opportunityHeaderId}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_lead(accessToken) {
    return axiosInstance.get(`/opty/lead`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_lead_details_page(accessToken, opportunityHeaderId, size, number) {
    return axiosInstance.get(`/opty/lead/details/page/${opportunityHeaderId}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_lead_details(accessToken, opportunityHeaderId) {
    return axiosInstance.get(`/opty/lead/details/${opportunityHeaderId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_lead_id(accessToken, id) {
    return axiosInstance.get(`/opty/lead/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_lead_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/opty/lead/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_v2_lead(accessToken) {
    return axiosInstance.get(`/opty/v2/lead`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_v2_lead_detailsPage(accessToken, opportunityHeaderId, size, number) {
    return axiosInstance.get(`/opty/v2/lead/details/page/${opportunityHeaderId}/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_v2_lead_details(accessToken, opportunityHeaderId) {
    return axiosInstance.get(`/opty/v2/lead/details/${opportunityHeaderId}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_v2_lead_id(accessToken, id) {
    return axiosInstance.get(`/opty/v2/lead/${id}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}

export function get_v2_lead_sizeNumber(accessToken, size, number) {
    return axiosInstance.get(`/opty/v2/lead/${size}/${number}`, {
        headers: {
            ...tenantIdHeader,
            Authorization: `Bearer ${accessToken}`,
        },
    })
}