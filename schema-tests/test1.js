const Ajv = require('ajv')
const ajv = new Ajv()
require('ajv-errors')(ajv)

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      errorMessage: '这是不对的',
      minLength: 10
    },
    age: {
      type: 'number'
    },
    pets: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean'
    }
  },
  required: ['name', 'age']
}

const validate = ajv.compile(schema)
const valid = validate({
  name: 'fridolph',
  age: 29,
  pets: ['a', 'b', 'c'],
  isWorker: true
})
if (!valid) {
  console.log(validate.errors)
}
