export const hr_fdp_schema = {
    type: 'object',
    properties: {
        recordCount:        { type: 'number' },
        pageNumber:         { type: 'number' },
        pagesAvailable:     { type: 'number' },
        pageSize:           { type: 'number' },
        firstIndex:         { type: 'number' },
        lastIndex:          { type: 'number' },
        items:              { type: 'array',
          items: {
            type: 'object',
            properties: {
                projectCostingId:           { type: 'number' },
                personId:                   { type: 'number' },
                projectDocNumber:           { type: 'string' },
                docNumber:                  { type: 'string' },
                employeeId:                 { type: 'string' },
                employeeName:               { type: 'string' },
                role:                       { type: 'string' },
                duration:                   { type: 'number' },
                durationType:               { type: 'string' },
                period:                     { type: 'string', format: 'date'  },
                clientUserName:             { type: 'string' },
                clientUserEmail:            { type: 'string', format: 'email' },
                clientUserPosition:         { type: 'string' },
                clientDirectUserName:       { type: 'string' },
                clientDirectUserContact:    { type: 'string' },
                clientDirectUserEmail:      { type: 'string', format: 'email' },
                clientDirectUserPosition:   { type: 'string' },
                projectLocation:            { type: 'string' },
                toolProviderType:           { type: 'number' },
                toolProviderNote:           { type: 'string' },
                overtimeType:               { type: 'number' },
                timesheetFormatType:        { type: 'number' },
                timesheetPeriodStartDate:   { type: 'number' },
                timesheetPeriodEndDate:     { type: 'number' },
                timesheetSigningUser:       { type: 'string' },
                bastSigningUser:            { type: 'string' },
                otherInformation:           { type: 'string' },
                sentTo:                     { type: 'string',format: 'email' },
                sentDate:                   { type: 'string' },
                emailSubject:               { type: 'string' },
                creator:                    { type: 'string', format: 'email' }
            }
           }
        }
    }
}