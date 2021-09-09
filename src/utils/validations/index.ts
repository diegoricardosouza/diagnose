import Joi from 'joi'

export type InputFormProps = {
  nome: string
  email: string
  telefone: string
}

const fieldsValidations = {
  nome: Joi.string()
    .min(5)
    .required()
    .message('Campo de preenchimento obrigatório.'),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'E-mail inválido',
      'any.required': 'Campo de preenchimento obrigatório.'
    }),
  telefone: Joi.string()
    .required()
    .message('Campo de preenchimento obrigatório.')
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
