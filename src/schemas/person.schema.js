export const baseToolsPerson_schema ={
    type: 'object',
    properties: {
        tools:                                      { type: 'array',
            items: {
              type: 'object',
              properties: {
                  personId:                         { type: 'number' },
                  employmentHistoryId:              { type: 'number' },
                  softwareToolId:                   { type: 'number' },
                  softwareToolName:                 { type: 'string' },
                  softwareToolDisplay:              { type: 'string' },
                  intensitas:                       { type: 'number' }
              }
           }
          }
    }
}

export const person_certi_schema = {
    type: 'object',
    properties: {
        personId:                                   { type: 'number' },
        year:                                       { type: 'number' },
        nama:                                       { type: 'string' },
        issuer:                                     { type: 'string' },
        validDateFrom:                              { type: 'string', format: 'date' },
        expirationDate:                             { type: 'string', format: 'date' },
        tahunMulaiBerlaku:                          { type: 'number' },
        tahunBerlakuHingga:                         { type: 'number' },
        url:                                        { type: 'string', format: 'uri-reference' },
        deskripsi:                                  { type: 'string' }
    }
}

export const person_contact_schema = {
    type: 'object',
    properties: {
        recordCount:                                { type: 'number' },
        pageNumber:                                 { type: 'number' },
        pagesAvailable:                             { type: 'number' },
        pageSize:                                   { type: 'number' },
        firstIndex:                                 { type: 'number' },
        lastIndex:                                  { type: 'number' },
        items:                                      { type: 'array',
          items: {
            type: 'object',
            properties: {
                personId:                           { type: 'number' },
                userId:                             { type: 'string' },
                nomorTelpon1:                       { type: 'string' },
                nomorTelpon2:                       { type: 'string' },
                email:                              { type: 'string', format: 'email' },
                kontakDarurat:                      { type: 'string' },
                telponKontakDarurat:                { type: 'string' },
                kontakDaruratNonKeluarga:           { type: 'string' },
                telponKontakDaruratNonKeluarga:     { type: 'string' }
            }
         }
        }
    }
}

export const person_edu_schema = {
    type: 'object',
    properties: {
        personId:                                   { type: 'number' },
        tahunMulai:                                 { type: 'number' },
        bulanMulai:                                 { type: 'number' },
        tahunSelesai:                               { type: 'number' },
        bulanSelesai:                               { type: 'number' },
        currentlyStudying:                          { type: 'boolean'},
        jenjang:                                    { type: 'string', enum: ['TK'] },
        nama:                                       { type: 'string' },
        jurusan:                                    { type: 'string' },
        kota:                                       { type: 'string' },
        negara:                                     { type: 'string' },
        gelar:                                      { type: 'string' },
        predikat:                                   { type: 'string' },
        nilai:                                      { type: 'number' }
    }
}

export const person_employee_schema = {
    type: 'object',
    properties: {
        personId:                                   { type: 'number' },
        userId:                                     { type: 'string' },
        email:                                      { type: 'string' },
        nama:                                       { type: 'string' },
        jabatan:                                    { type: 'string' },
        nomorKaryawan:                              { type: 'string' },
        reportTo:                                   { type: 'string' },
        karyawan:                                   { type: 'boolean'},
        daysToContractEnd:                          { type: 'string' },
        contractStartDate:                          { type: 'string', format: 'date' },
        contractEndDate:                            { type: 'string', format: 'date' },
        statusAktif:                                { type: 'string' },
        assignmentType:                             { type: 'string', enum: ['HEAD_OFFICE'] },
        employmentContractType:                     { type: 'string', enum: ['PKWT'] },
        hiringType:                                 { type: 'string', enum: ['BOOTCAMP'] },
        employmentType:                             { type: 'string', enum: ['FULLTIME'] },
        project:                                    { type: 'string' },
        clientHeaderId:                             { type: 'number' },
        clientHeaderName:                           { type: 'string' },
        kodePosisi:                                 { type: 'string' },
        posisi:                                     { type: 'string' },
        level:                                      { type: 'string' },
        nomorKontrak:                               { type: 'string' },
        startBootcamp:                              { type: 'string', format: 'date' },
        joinDate:                                   { type: 'string', format: 'date' },
        resignDate:                                 { type: 'string', format: 'date' },
        ibuKandung:                                 { type: 'string' },
        statusPernikahan:                           { type: 'string', enum: ['BELUM_MENIKAH', 'SUDAH_MENIKAH'] },
        npwp:                                       { type: 'string' },
        nomorBpjsKesehatan:                         { type: 'string' },
        nomorBpjsTk:                                { type: 'string' },
        nomorBpjsTkPensiun:                         { type: 'string' },
        nomorKK:                                    { type: 'string' },
        nik:                                        { type: 'string' },
        bankId:                                     { type: 'string' },
        accountNumber:                              { type: 'string' },
        accountName:                                { type: 'string' },
        jenisKelamin:                               { type: 'string', enum: ['PRIA', 'WANITA'] },
        dob:                                        { type: 'string', format: 'date' },
        pob:                                        { type: 'string' },
        golonganDarah:                              { type: 'string', enum: ['A', 'B', 'AB', 'O'] },
        alamat:                                     { type: 'string' },
        domisili:                                   { type: 'string' },
        profilePhotoAttachmentId:                   { type: 'number' },
        signatureAttachmentId:                      { type: 'number' }
    }
}

export const person_emphist_schema = {
    type: 'object',
    properties: {
        id:                                         { type: 'number' },
        personId:                                   { type: 'number' },
        nama:                                       { type: 'string' },
        tahunMasuk:                                 { type: 'number' },
        bulanMasuk:                                 { type: 'number' },
        tahunKeluar:                                { type: 'number' },
        bulanKeluar:                                { type: 'number' },
        jabatanTerakhir:                            { type: 'string' },
        gajiTerakhir:                               { type: 'number' },
        deskripsi:                                  { type: 'string' },
        currentlyWorkHere:                          { type: 'boolean' },
        internship:                                 { type: 'boolean' },
        tools:                                      { type: 'array',
          items: {
            type: 'object',
            properties: {
                ...baseToolsPerson_schema.properties
            }
         }
        }
    }
}

export const person_family_schema = {
    type: 'object',
    properties: {
        recordCount:                                { type: 'number' },
        pageNumber:                                 { type: 'number' },
        pagesAvailable:                             { type: 'number' },
        pageSize:                                   { type: 'number' },
        firstIndex:                                 { type: 'number' },
        lastIndex:                                  { type: 'number' },
        items:                                      { type: 'array',
          items: {
            type: 'object',
            properties: {
                personId:                           { type: 'number' },
                userId:                             { type: 'string' },
                type:                               { type: 'string', enum: ['AYAH', 'IBU', 'PASANGAN'] },
                urut:                               { type: 'number' },
                name:                               { type: 'string' },
                jenisKelamin:                       { type: 'string', enum: ['PRIA', 'WANITA'] }
            }
         }
        }
    }
}

export const person_hiringStatus_schema = {
    type: 'object',
    properties: {
        personId:                                   { type: 'number' },
        apply:                                      { type: 'boolean' },
        troPass:                                    { type: 'boolean' },
        troFail:                                    { type: 'boolean' },
        roPass:                                     { type: 'boolean' },
        roFail:                                     { type: 'boolean' },
        updatedCV:                                  { type: 'boolean' },
        interviewedByTRO:                           { type: 'boolean' },
        interviewedByRO:                            { type: 'boolean' }
    }
}

export const person_project_schema = {
    type: 'object',
    properties: {
        id:                                         { type: 'number' },
        personId:                                   { type: 'number' },
        employementHistoryId:                       { type: 'number' },
        nama:                                       { type: 'number' },
        tahunMulai:                                 { type: 'number' },
        bulanMulai:                                 { type: 'number' },
        tahunSelesai:                               { type: 'number' },
        bulanSelesai:                               { type: 'number' },
        deskripsi:                                  { type: 'number' },
        keahlian:                                   { type: 'number' },
        tags:                                       { type: 'number' },
        masihBerjalan:                              { type: 'number' },
        employmentHistory:                          { type: 'array',
          items: {
            type: 'object',
            properties: {
                ...person_emphist_schema.properties
            }
          }
        },
        tools:                                      { type: 'array',
            items: {
              type: 'object',
              properties: {
                  ...baseToolsPerson_schema.properties
              }
            }
        }
    }
}

export const person_rthID_schema ={
    type: 'object',
    properties: {
        items:                                      { type: 'array',
          items: {
            type: 'object',
            properties: {
                id:                                 { type: 'number' },
                personId:                           { type: 'number' },
                docNumber:                          { type: 'string' },
                name:                               { type: 'string' },
                role:                               { type: 'string' },
                projectName:                        { type: 'string' },
                requester:                          { type: 'string', format: 'email' },
                requesterName:                      { type: 'string' },
                requestedJoinDate:                  { type: 'string', format: 'date' },
                salaryGrade:                        { type: 'string' },
                duration:                           { type: 'string' },
                jenisDurasi:                        { type: 'string', enum: ['DETIK', 'HARI', 'MINGGU', 'BULAN']  },
                allowance:                          { type: 'string' },
                note:                               { type: 'string' },
                status:                             { type: 'string', enum: ['SUBMITTED'] },
                cancelationNote:                    { type: 'string' },
                joinDatePlan:                       { type: 'string', format: 'date' },
                joinDateActual:                     { type: 'string', format: 'date' }
            }
          }
        }
    }
}

export const person_rth_schema = {
    type: 'object',
    properties: {
        recordCount:                                { type: 'number' },
        pageNumber:                                 { type: 'number' },
        pagesAvailable:                             { type: 'number' },
        pageSize:                                   { type: 'number' },
        firstIndex:                                 { type: 'number' },
        lastIndex:                                  { type: 'number' },
        items:                                      { type: 'array',
          items: {
            type: 'object',
            properties: {
                ...person_rthID_schema.properties
            }
         }
        }
    }
}

export const person_training_schema = {
    type: 'object',
    properties: {
        personId:                                   { type: 'number' },
        nama:                                       { type: 'string' },
        penyelenggara:                              { type: 'string' },
        tahun:                                      { type: 'number' },
        bulan:                                      { type: 'number' },
        durasi:                                     { type: 'number' },
        jenisDurasi:                                { type: 'string', enum: ['DETIK', 'HARI', 'MINGGU', 'BULAN']  },
        keterangan:                                 { type: 'string' }
    }
}