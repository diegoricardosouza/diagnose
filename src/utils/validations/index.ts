import Joi from 'joi'

export type InputFormProps = {
  nome: string
  email: string
  telefone: string
}

const fieldsValidations = {
  nome: Joi.string().required().messages({
    'string.base': `"a" should be a type of 'text'`,
    'string.empty': `Campo de preenchimento obrigatório`,
    'any.required': `Campo de preenchimento obrigatório`
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'E-mail inválido',
      'string.empty': `Campo de preenchimento obrigatório`,
      'any.required': 'Campo de preenchimento obrigatório.'
    }),
  telefone: Joi.string().required().messages({
    'string.empty': `Campo de preenchimento obrigatório`,
    'any.required': 'Campo de preenchimento obrigatório.'
  })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function formValidate(values: InputFormProps) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
