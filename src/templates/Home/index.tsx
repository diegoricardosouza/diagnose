import { Container } from 'components/Container'
import Footer from 'components/Footer'
import ItemBox from 'components/ItemBox'
import Menu from 'components/Menu'

import * as S from './styles'

const Home = () => (
  <>
    <S.HeaderWrapper>
      <Container>
        <Menu />
      </Container>
    </S.HeaderWrapper>

    <main>
      <ItemBox />
    </main>

    <S.FooterWrapper>
      <Container>
        <Footer />
      </Container>
    </S.FooterWrapper>
  </>
)

export default Home
