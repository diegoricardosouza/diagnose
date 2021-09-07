import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ImageItem from 'components/ImageItem'
import ItemGroup from 'components/ItemGroup'

import agendamento from './mockAgendamento'
import consultas from './mockConsultas'

import * as S from './styles'

const ItemBox = () => (
  <S.Wrapper>
    <Container>
      <S.HeaderWrapper>
        <Heading color="white">AINDA TEM MAIS</Heading>
      </S.HeaderWrapper>

      <S.AgendamentoWrapper>
        <ImageItem src="img/img-item1.png" />

        <ItemGroup title="AGENDAMENTO" items={agendamento} />
      </S.AgendamentoWrapper>

      <S.Subtitle>E MUITO +</S.Subtitle>

      <S.ConsultasWrapper>
        <ItemGroup title="CONSULTAS" items={consultas} />

        <ImageItem src="img/img-item2.png" />
      </S.ConsultasWrapper>
    </Container>
  </S.Wrapper>
)

export default ItemBox
