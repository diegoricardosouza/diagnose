import AboutContent from 'components/AboutContent'
import AboutHighLight from 'components/AboutHighLight'
import { Container } from 'components/Container'
import * as S from './styles'

const AboutGroup = () => (
  <S.Wrapper>
    <Container>
      <S.AboutContentWrapper>
        <AboutContent
          title="O <span>Diagnose Pró</span> já atende mais de <strong>2 mil</strong><br> <strong>consultórios e clínicas</strong> por todo Brasil!"
          content="<p>Só quem tem <span>mais de 20 anos de experiência</span> em<br> desenvolvimento de softwares médicos pode lançar <span>o sistema</span><br> <span>web mais completo para Gestão de Clínicas e Consultórios.</span></p>"
        />
      </S.AboutContentWrapper>

      <S.AboutHighLightWrapper>
        <AboutHighLight
          title="Agora com sua <span>versão web</span> ficou ainda mais<br> prático ter <strong>o melhor software de gestão</strong>"
          src="img/doctor.png"
        />
      </S.AboutHighLightWrapper>
    </Container>
  </S.Wrapper>
)

export default AboutGroup
