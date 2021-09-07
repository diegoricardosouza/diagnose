import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ItemBenefits from 'components/ItemBenefits'
import * as S from './styles'

const Benefits = () => (
  <Container>
    <S.Wrapper>
      <S.WrapperHeading>
        <Heading>VANTAGENS</Heading>
      </S.WrapperHeading>

      <S.WrapperContent>
        <S.ItemOne>
          <ItemBenefits
            title="Atendimento<br> via teleconsulta"
            src="img/vantagens/teleconsulta.svg"
          />
        </S.ItemOne>

        <S.ItemTwo>
          <ItemBenefits
            title="Prontuário personalizado"
            src="img/vantagens/prontuario.svg"
          />
        </S.ItemTwo>

        <S.ItemThree>
          <ItemBenefits
            title="Sistema já adequado<br> às novas normas de LGPD"
            src="img/vantagens/lock.svg"
          />
        </S.ItemThree>

        <S.Image src="img/img-benefits.png" alt="Imagem Diagnose Pró" />

        <S.ItemFour>
          <ItemBenefits
            title="Captura de imagem e<br> armazenamento na nuvem"
            src="img/vantagens/upload.svg"
          />
        </S.ItemFour>

        <S.ItemFive>
          <ItemBenefits
            title="Diversos formatos de agenda<br> com gerenciamento individual"
            src="img/vantagens/calendar.svg"
          />
        </S.ItemFive>

        <S.ItemSix>
          <ItemBenefits
            title="Sistema de controle<br> financiamento e faturamento<br> com TISS 100% Web"
            src="img/vantagens/teleconsulta.svg"
          />
        </S.ItemSix>
      </S.WrapperContent>
    </S.Wrapper>
  </Container>
)

export default Benefits
