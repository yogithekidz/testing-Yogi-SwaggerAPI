import { expect, use } from "chai"
import chaiJsonSchmeaAjv from "chai-json-schema-ajv"
import Ajv from "ajv"
import ApplyAjvFormat from 'ajv-formats'

const ajvInstance = new Ajv()
ApplyAjvFormat(ajvInstance)

const jsonSchemaFormat = chaiJsonSchmeaAjv.create({
    ajv: ajvInstance
})

use(jsonSchemaFormat)

export default expect