export const referensi_industry_schema = {
    type: 'object',
    properties: {
        id:   { type: 'number' },
        name: { type: 'string' }
    }
}

export const referensi_complete_schema = {
    type: 'object',
    properties: {
        recordCount:    { type: 'number' },
        pageNumber:     { type: 'number' },
        pagesAvailable: { type: 'number' },
        pageSize:       { type: 'number' },
        firstIndex:     { type: 'number' },
        lastIndex:      { type: 'number' },
        items:          { type: 'array',
          items: {
            type: 'object',
            properties: {
              id:       { type: 'number' },
              name:     { type: 'string' },
              htag:     { type: 'number' }
            },
            required:   ['id', 'name', 'htag']
         }
        }
    }
}

export const referensi_schema = {
    type: 'object',
    properties: {
        ...referensi_industry_schema.properties,
        htag: { type: 'number'}
    }
}