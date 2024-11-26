export const master_company_schema = {
    type: 'object',
    properties: {
        id:                { type: 'number' },
        companyHeaderId:   { type: 'number' },
        companyDetailId:   { type: 'number' },
        salutation:        { type: 'string' },
        companyDetailName: { type: 'string' },
        name:              { type: 'string' },
        division:          { type: 'string' },
        phone:             { type: 'string' },
        email:             { type: 'string', format: 'email' },
        mainContact:       { type: 'boolean'}
    }
}

export const master_companyd_schema = {
    type: 'object',
    properties: {
        id:                { type: 'number' },
        companyHeaderId:   { type: 'number' },
        name:              { type: 'string' },
        deskripsi:         { type: 'string' },
        address:           { type: 'string' },
        mainAddress:       { type: 'boolean' },
        type:              { type: 'string', enum: ['HEAD_OFFICE', 'BRANCH_OFFICE'] }
    }
}

export const master_companyh_schema = {
    type: 'object',
    properties: {
        tenantId:          { type: 'string' },
        id:                { type: 'number' },
        name:              { type: 'string' },
        nameForMailing:    { type: 'string' },
        initial:           { type: 'string' },
        industries:        { type: 'array',
          items: {
            type: 'object',
            properties: {
                companyHeaderId:   { type: 'number' },
                industryId:        { type: 'number' },
                industryName:      { type: 'string' }
            }
         }
        }
    }
}

export const master_config_schema = {
    type: 'object',
    properties: {
        recordCount:      { type: 'number' },
        pageNumber:       { type: 'number' },
        pagesAvailable:   { type: 'number' },
        pageSize:         { type: 'number' },
        firstIndex:       { type: 'number' },
        lastIndex:        { type: 'number' },
        items:            { type: 'array',
          items: {
            type: 'object',
            properties: {
                name:     { type: 'string' },
                user:     { type: 'string' },
                value:    { type: 'string' }
            }
         }
        }
    }
}

export const master_config_name_schema = {
    type: 'object',
    properties: {
        name:     { type: 'string' },
        user:     { type: 'string' },
        value:    { type: 'string' }
    }
}

export const master_reference_schema = {
    type: 'object',
    properties: {
        type:     { type: 'string', enum: ['HIRING_REFERENCE_SOURCE'] },
        list:     { type: 'array',
          items: {
            type: 'object',
            properties: {
            code:     { type: 'string' },
            name:     { type: 'string' }
            }
          }
        }
    }
}

export const master_compdoc_byheaderid_schema = {
    type: 'object',
    properties: {
        companyHeaderId:    { type: 'number' },
        companyDetailId:    { type: 'number' },
        attachmentId:       { type: 'number' },
        filename:           { type: 'string' },
        description:        { type: 'string' },
        category:           { type: 'string' }
    }
}

export const master_salgrade_schema = {
    type: 'object',
    properties: {
        id:                 { type: 'number' },
        jenis:              { type: 'string', enum: ['RECRUITMENT_SALARY_GRADE'] },
        minSal:             { type: 'number' },
        maxSal:             { type: 'number' },
        minGPPercentage:    { type: 'number' },
        minSales:           { type: 'number' },
        minGP:              { type: 'number' }
    }
}

export const master_service_schema = {
    type: 'object',
    properties: {
        id:                { type: 'string' },
        name:              { type: 'string' }
    }
}