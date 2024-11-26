export const opty_testSchedule_schema = {
    type: 'object',
    properties: {
        personId:                                           { type: 'number' },
        nama:                                               { type: 'string' },
        roleDisplay:                                        { type: 'string' },
        manpowerSolutionOpportunityId:                      { type: 'number' },
        clientHeaderId:                                     { type: 'number' },
        time:                                               { type: 'string', format: 'date-time' },
        testType:                                           { type: 'string', enum: ['INTERVIEW'] },
        note:                                               { type: 'string' },
        attendTime:                                         { type: 'string', format: 'date-time' },
        result:                                             { type: 'string', enum: ['PASSED'] },
        resultNote:                                         { type: 'string' },
        status:                                             { type: 'number' },
        userEmail:                                          { type: 'string' },
        userContactNumber:                                  { type: 'string' },
        salesGrade:                                         { type: 'number' },
        minPrice:                                           { type: 'number' }
    }
}

export const opty_leadactivity_schema = {
    type: 'object',
    properties: {
        recordCount:                                        { type: 'number' },
        pageNumber:                                         { type: 'number' },
        pagesAvailable:                                     { type: 'number' },
        pageSize:                                           { type: 'number' },
        firstIndex:                                         { type: 'number' },
        lastIndex:                                          { type: 'number' },
        items:                                              { type: 'array',
            items: {
                type: 'object',
                properties: {
                    opportunityHeaderId:                    { type: 'number' },
                    actionDatePlan:                         { type: 'string', format: 'date-time' },
                    actionPlan:                             { type: 'string' },
                    actionDateReal:                         { type: 'string', format: 'date-time' },
                    actionResult:                           { type: 'string' },
                }
            }
        }
    }
}

export const opty_lead_schema = {
    type: 'object',
    properties: {
        id:                                                 { type: 'number' },
        nomor:                                              { type: 'string' },
        clientHeaderId:                                     { type: 'number' },
        clientHeaderName:                                   { type: 'string' },
        clientHeaderInitial:                                { type: 'string' },
        clientDetailId:                                     { type: 'number' },
        clientDetailName:                                   { type: 'string' },
        salesUserId:                                        { type: 'string' },
        source:                                             { type: 'string' },
        clientContactName:                                  { type: 'string' },
        clientContactNumber:                                { type: 'string' },
        clientContactEmail:                                 { type: 'string' },
        description:                                        { type: 'string' },
        status:                                             { type: 'number' },
        type:                                               { type: 'string', enum: ['NEW'] },
        clientContactLinkedIn:                              { type: 'string' },
        openDate:                                           { type: 'string', format: 'date-time' },
        closeDate:                                          { type: 'string', format: 'date-time' },
        dropDate:                                           { type: 'string', format: 'date-time' },
        dropNote:                                           { type: 'string' }
    }
}