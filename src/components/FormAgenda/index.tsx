import ButtonForm from 'components/ButtonForm'
import FormHeading from 'components/FormHeading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormAgenda = () => (
  <S.Wrapper>
    <S.HeaderWrapper>
      <FormHeading
        color="normal"
        title="Quer mais informações?"
        subtitle="Nossos consultores entram<br> em contato com você."
      />
    </S.HeaderWrapper>

    <form>
      <TextField
        name="nome"
        placeholder="Seu nome:"
        type="text"
        color="black"
      />

      <TextField
        name="email"
        placeholder="Seu melhor e-mail:"
        type="email"
        color="black"
      />

      <TextField
        name="telefone"
        placeholder="Telefone com DDD:"
        type="tel"
        color="black"
      />

      <ButtonForm type="submit">Enviar</ButtonForm>
    </form>
  </S.Wrapper>
)

export default FormAgenda
