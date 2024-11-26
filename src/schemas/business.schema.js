export const business_quotation_schema = {
    type: 'object',
    properties: {
        id:                                                 { type: 'number' },
        nomor:                                              { type: 'number' },
        jenis:                                              { type: 'number' },
        tanggal:                                            { type: 'string' },
        validToDate:                                        { type: 'string' },
        reviseFor:                                          { type: 'string' },
        reviseForNumber:                                    { type: 'string' },
        origin:                                             { type: 'string' },
        revisionNumber:                                     { type: 'string' },
        clientHeaderId:                                     { type: 'string' },
        clientDetailId:                                     { type: 'string' },
        clientDetailName:                                   { type: 'string' },
        clientDetailAddress:                                { type: 'string' },
        clientContactId:                                    { type: 'string' },
        clientContactName:                                  { type: 'string' },
        clientHeaderName:                                   { type: 'string' },
        clientHeaderMailingName:                            { type: 'string' },
        serviceId:                                          { type: 'string' },
        subtotal:                                           { type: 'string' },
        note:                                               { type: 'string' },
        creator:                                            { type: 'string' },
        approval1:                                          { type: 'string' },
        approval2:                                          { type: 'string' },
        approval3:                                          { type: 'string' },
        approval4:                                          { type: 'string' },
        approval5:                                          { type: 'string' },
        approval1Status:                                    { type: 'string' },
        approval2Status:                                    { type: 'string' },
        approval3Status:                                    { type: 'string' },
        approval4Status:                                    { type: 'string' },
        approval5Status:                                    { type: 'string' },
        approval1Note:                                      { type: 'string' },
        approval2Note:                                      { type: 'string' },
        approval3Note:                                      { type: 'string' },
        approval4Note:                                      { type: 'string' },
        approval5Note:                                      { type: 'string' },
        approval1Date:                                      { type: 'string' },
        approval2Date:                                      { type: 'string' },
        approval3Date:                                      { type: 'string' },
        approval4Date:                                      { type: 'string' },
        approval5Date:                                      { type: 'string' },
        needApproval:                                       { type: 'string' },
        needApprovalBy:                                     { type: 'string' },
        lastApprovalStatus:                                 { type: 'string' },
        manpowerOptys:                                      { type: 'array',
            items: {
                type: 'object',
                properties: {
                    quotationId:                            { type: 'number'},
                    manpowerSolutionOpportunityId:          { type: 'number'}
                }
            }
        }
    }
}

export const business_quotation_allpending_schema = {
    type: 'object',
    properties: {
        recordCount:                                        { type: 'number' },
        pageNumber:                                         { type: 'number' },
        pagesAvailable:                                     { type: 'number' },
        pageSize:                                           { type: 'string' },
        firstIndex:                                         { type: 'string' },
        lastIndex:                                          { type: 'string' },
        items:                                              { type: 'array',
            items: {
                type: 'object',
                properties: {
                    ...business_quotation_schema.properties
                }
            }
        }
    }
}

export const business_quotationItem_schema = {
    type: 'object',
    properties: {
        quotationId:                                        { type: 'number' },
        number:                                             { type: 'number' },
        description:                                        { type: 'string' },
        unit:                                               { type: 'string', enum: ['PERSON'] },
        unitPrice:                                          { type: 'number' },
        quantity:                                           { type: 'number' },
        duration:                                           { type: 'number' },
        subtotal:                                           { type: 'number' },
        note:                                               { type: 'string' }
    }
}

export const business_tac_schema = {
    type: 'object',
    properties: {
        id:                                                 { type: 'number' },
        jenis:                                              { type: 'string', enum: ['PROFESSIONAL_SERVICES'] },
        content:                                            { type: 'string' }
    }
}