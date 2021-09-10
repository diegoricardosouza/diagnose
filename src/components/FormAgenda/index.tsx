import { useState, useCallback } from 'react'
import { Check, ErrorOutline } from '@styled-icons/material-outlined'
import ButtonForm from 'components/ButtonForm'
import { FormError, FormLoading, FormSuccess } from 'components/Form'
import FormHeading from 'components/FormHeading'
import TextField from 'components/TextField'
import * as S from './styles'
import { phone } from 'utils/mask'
import { FieldErrors, formValidate } from 'utils/validations'

const FormAgenda = () => {
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
      setSend(false)
      return
    }

    setFieldError({})

    // faz o envio do email
    const data = {
      ...values
    }

    const response = await fetch('api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const dataResponse = await response.json()

    if (dataResponse.status === 200) {
      setSend(true)
      setValues({ nome: '', email: '', telefone: '' })
      setLoading(false)
    } else {
      setFormError('erro ao enviar os dados.')
      setLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <FormHeading
          color="normal"
          title="Quer mais informações?"
          subtitle="Nossos consultores entram<br> em contato com você."
        />
      </S.HeaderWrapper>

      {!!send && (
        <FormSuccess>
          <Check />
          Mensagem enviada com sucesso!
        </FormSuccess>
      )}

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
          color="black"
          error={fieldError?.nome}
          value={values.nome}
          onInputChange={(v) => handleInput('nome', v)}
        />

        <TextField
          name="email"
          placeholder="Seu melhor e-mail:"
          type="email"
          color="black"
          error={fieldError?.email}
          value={values.email}
          onInputChange={(v) => handleInput('email', v)}
        />

        <TextField
          name="telefone"
          placeholder="Telefone com DDD:"
          type="tel"
          color="black"
          error={fieldError?.telefone}
          value={values.telefone}
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

export default FormAgenda
