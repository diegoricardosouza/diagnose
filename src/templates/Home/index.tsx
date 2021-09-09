import AboutGroup from 'components/AboutGroup'
import AgendaGroup from 'components/AgendaGroup'
import BannerGroup from 'components/BannerGroup'
import Benefits from 'components/Benefits'
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
      <S.BannerWrapper>
        <BannerGroup src="img/bg-banner.png" />
      </S.BannerWrapper>

      <AboutGroup />

      <S.GroupDeviceWrapper>
        <GroupDevice src="img/bg-device.jpg" />
      </S.GroupDeviceWrapper>

      <S.BenefitsWrapper>
        <Benefits />
      </S.BenefitsWrapper>

      <ItemBox />

      <S.AgendaWrapper>
        <AgendaGroup />
      </S.AgendaWrapper>
    </main>

    <S.FooterWrapper>
      <Container>
        <Footer />
      </Container>
    </S.FooterWrapper>
  </>
)

export default Home
