import { Container } from 'components/Container'
import Footer from 'components/Footer'
import GroupDevice from 'components/GroupDevice'
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
      <GroupDevice src="img/bg-device.jpg" />
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
