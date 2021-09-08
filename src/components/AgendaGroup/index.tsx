import { KeyboardArrowRight } from '@styled-icons/material-outlined'
import AgendaText from 'components/AgendaText'
import Button from 'components/Button'
import { Container } from 'components/Container'
import FormAgenda from 'components/FormAgenda'
import * as S from './styles'

const AgendaGroup = () => (
  <Container>
    <S.Wrapper>
      <S.TextWrapper>
        <AgendaText
          title="Quer conhecer<br> <span>todos os recursos?</span>"
          content="<p><strong>Agende agora mesmo<br> uma demonstração</strong> do<br> <span>Diagnose Pró</span> com um<br> dos nossos consultores.</p>"
        />
        <Button icon={<KeyboardArrowRight />} as="a">
          Agendar agora
        </Button>
      </S.TextWrapper>

      <FormAgenda />
    </S.Wrapper>
  </Container>
)

export default AgendaGroup
