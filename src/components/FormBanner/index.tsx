import { useState, useCallback } from 'react'
import { ErrorOutline } from '@styled-icons/material-outlined'

import ButtonForm from 'components/ButtonForm'
import FormHeading from 'components/FormHeading'
import TextField from 'components/TextField'
import { FormError, FormLoading } from 'components/Form'

import * as S from './styles'
import { FieldErrors, formValidate } from 'utils/validations'
import { phone } from 'utils/mask'

const FormBanner = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ nome: '', email: '', telefone: '' })
  const [loading, setLoading] = useState(false)
  const [send, setSend] = useState(false)

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    phone(e)
  }, [])

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = formValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      setFormError('')
      return
    }

    setFieldError({})

    // faz o envio do email

    setLoading(false)

    // jogar o erro
    setFormError('erro ao enviar os dados.')
  }

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <FormHeading
          color="white"
          title="Quer mais informações?"
          subtitle="Nossos consultores entram<br> em contato com você."
        />
      </S.HeaderWrapper>

      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="nome"
          placeholder="Seu nome:"
          type="text"
          color="normal"
          error={fieldError?.nome}
          onInputChange={(v) => handleInput('nome', v)}
        />

        <TextField
          name="email"
          placeholder="Seu melhor e-mail:"
          type="email"
          color="normal"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
        />

        <TextField
          name="telefone"
          placeholder="Telefone com DDD:"
          type="tel"
          color="normal"
          error={fieldError?.telefone}
          onKeyUp={handleKeyUp}
          onInputChange={(v) => handleInput('telefone', v)}
        />

        <ButtonForm type="submit">
          {loading ? <FormLoading /> : <span>Enviar</span>}
        </ButtonForm>
      </form>
    </S.Wrapper>
  )
}

export default FormBanner
