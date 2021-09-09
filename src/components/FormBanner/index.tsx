import { useState } from 'react'

import ButtonForm from 'components/ButtonForm'
import FormHeading from 'components/FormHeading'
import TextField from 'components/TextField'
import * as S from './styles'
import { FieldErrors } from 'utils/validations'

const FormBanner = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ nome: '', email: '', telefone: '' })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
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

      <form>
        <TextField
          name="nome"
          placeholder="Seu nome:"
          type="text"
          color="normal"
          onInputChange={(v) => handleInput('nome', v)}
        />

        <TextField
          name="email"
          placeholder="Seu melhor e-mail:"
          type="email"
          color="normal"
          onInputChange={(v) => handleInput('email', v)}
        />

        <TextField
          name="telefone"
          placeholder="Telefone com DDD:"
          type="tel"
          color="normal"
          onInputChange={(v) => handleInput('telefone', v)}
        />

        <ButtonForm type="submit">Enviar</ButtonForm>
      </form>
    </S.Wrapper>
  )
}

export default FormBanner
