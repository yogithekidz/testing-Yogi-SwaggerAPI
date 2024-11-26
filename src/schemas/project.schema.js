export const project_pca_schema = {
    type: 'object',
    properties: {
        id:                                                 { type: 'number' },
        projectId:                                          { type: 'number' },
        version:                                            { type: 'number' },
        serviceType:                                        { type: 'string' },
        reviseFor:                                          { type: 'number' },
        reviseForNumber:                                    { type: 'string' },
        origin:                                             { type: 'number' },
        revisionNumber:                                     { type: 'number' },
        number:                                             { type: 'string' },
        date:                                               { type: 'string', format: 'date-time' },
        employeeRelationOfficer:                            { type: 'string' },
        clientUserName:                                     { type: 'string' },
        clientUserContactNumber:                            { type: 'string' },
        clientUserEmail:                                    { type: 'number' },
        poNumber:                                           { type: 'string' },
        poDate:                                             { type: 'string', format: 'date-time' },
        contractDateStart:                                  { type: 'string', format: 'date-time'},
        contractDateEnd:                                    { type: 'string', format: 'date-time' },
        clientHeaderId:                                     { type: 'number' },
        clientHeaderName:                                   { type: 'string' },
        clientDetailIdForBillingAddress:                    { type: 'number' },
        clientDetailNameForBillingAddress:                  { type: 'string' },
        clientDetailAddressForBilling:                      { type: 'string' },
        clientContactId:                                    { type: 'number' },
        clientContactName:                                  { type: 'string' },
        clientContactNumber:                                { type: 'string' },
        clientContactEmail:                                 { type: 'string' },
        invoiceNeedPO:                                      { type: 'boolean'},
        invoiceNeedTimesheet:                               { type: 'boolean'},
        invoiceTimesheetPeriod:                             { type: 'string' },
        invoiceNeedBAST:                                    { type: 'boolean'},
        rateType:                                           { type: 'string', enum: ['FIX'] },
        overtimeChargedToCustomer:                          { type: 'boolean'},
        termsOfPayment:                                     { type: 'number' },
        clientContactIdForInvoicing:                        { type: 'number' },
        clientContactNameForInvoicing:                      { type: 'string' },
        clientContactNumberForInvoicing:                    { type: 'string' },
        clientContactEmailForInvoicing:                     { type: 'string' },
        projectLocation:                                    { type: 'string' },
        overtimeIncentive:                                  { type: 'string' },
        overtimeModel:                                      { type: 'number' },
        laptopIncentive:                                    { type: 'string' },
        toolProviderModel:                                  { type: 'number' },
        otherIcentive:                                      { type: 'string' },
        workingHourStart:                                   { type: 'string' },
        workingHourEnd:                                     { type: 'string' },
        workingHour:                                        { type: 'string' },
        note:                                               { type: 'string' },
        salesUserId:                                        { type: 'string' },
        approval1:                                          { type: 'string' },
        approval2:                                          { type: 'string' },
        approval3:                                          { type: 'string' },
        approval4:                                          { type: 'string' },
        approval5:                                          { type: 'string' },
        approval1Status:                                    { type: 'string', enum: ['SUBMITTED'] },
        approval2Status:                                    { type: 'string', enum: ['SUBMITTED'] },
        approval3Status:                                    { type: 'string', enum: ['SUBMITTED'] },
        approval4Status:                                    { type: 'string', enum: ['SUBMITTED'] },
        approval5Status:                                    { type: 'string', enum: ['SUBMITTED'] },
        approval1Note:                                      { type: 'string' },
        approval2Note:                                      { type: 'string' },
        approval3Note:                                      { type: 'string' },
        approval4Note:                                      { type: 'string' },
        approval5Note:                                      { type: 'string' },
        approval1Date:                                      { type: 'string', format: 'date-time' },
        approval2Date:                                      { type: 'string', format: 'date-time' },
        approval3Date:                                      { type: 'string', format: 'date-time' },
        approval4Date:                                      { type: 'string', format: 'date-time' },
        approval5Date:                                      { type: 'string', format: 'date-time' },
        needApproval:                                       { type: 'number' },
        needApprovalBy:                                     { type: 'string' },
        lastApprovalStatus:                                 { type: 'string', enum: ['SUBMITTED'] }
    }
}

export const project_pcasubitem_schema = {
    type: 'object',
    properties: {
        projectCostingId:                                   { type: 'number' },
            itemNumber:                                     { type: 'number' },
            subItemName:                                    { type: 'string' },
            urut:                                           { type: 'number' },
            grade:                                          { type: 'string' },
            unit:                                           { type: 'string' },
            unitDisplay:                                    { type: 'string' },
            quantity:                                       { type: 'number' },
            period:                                         { type: 'number' },
            periodActual:                                   { type: 'number' },
            unitSellPrice:                                  { type: 'number' },
            sellPrice:                                      { type: 'number' },
            sellPriceActual:                                { type: 'number' },
            unitCost:                                       { type: 'number' },
            cost:                                           { type: 'number' },
            costActual:                                     { type: 'number' },
            unitGrossProfit:                                { type: 'number' },
            grossProfit:                                    { type: 'number' },
            grossProfitActual:                              { type: 'number' },
            grossProfitPercentage:                          { type: 'number' },
            grossProfitPercentageActual:                    { type: 'number' }
    }
}

export const project_pcaitem_schema = {
    type: 'object',
    properties: {
        projectCostingId:                                   { type: 'number' },
        contractDateStart:                                  { type: 'string' },
        contractDateEnd:                                    { type: 'string' },
        itemNumber:                                         { type: 'number' },
        itemNumberDisplay:                                  { type: 'number' },
        itemName:                                           { type: 'string' },
        roleDisplay:                                        { type: 'string' },
        manpowerSolutionOpportunityId:                      { type: 'number' },
        note:                                               { type: 'string' },
        personId:                                           { type: 'number' },
        salaryGrade:                                        { type: 'number' },
        cost:                                               { type: 'number' },
        sellPrice:                                          { type: 'number' },
        grossProfit:                                        { type: 'number' },
        grossProfitPercentage:                              { type: 'number' },
        subItems:                                           { type: 'array',
          items: {
            type: 'object',
            properties: {
                ...project_pcasubitem_schema.properties
            }
         }
        }
    }
}

export const project_pcaSupportDoc_schema = {
    type: 'object',
    properties: {
        projectCostingId:                                   { type: 'number' },
        attachmentId:                                       { type: 'number' },
        fileName:                                           { type: 'string' },
        description:                                        { type: 'string' }
    }
}