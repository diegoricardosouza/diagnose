import { NextSeo } from 'next-seo'

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
    <NextSeo
      title="Diagnose Pró"
      description="O Sistema Web mais completo para Gestão de clínicas e consultórios! O Diagnose Pró já atende mais de 2 mil consultórios e clínicas por todo Brasil!"
      canonical="http://www.diagnosepro.com.br"
      openGraph={{
        url: 'http://www.diagnosepro.com.br',
        title: 'Diagnose Pró',
        description:
          'O Sistema Web mais completo para Gestão de clínicas e consultórios! O Diagnose Pró já atende mais de 2 mil consultórios e clínicas por todo Brasil!',
        images: [
          {
            url: 'img/cover.jpg',
            width: 1827,
            height: 875,
            alt: 'Diagnose Pró'
          }
        ],
        site_name: 'Diagnose Pró'
      }}
    />
    <S.HeaderWrapper>
      <Container>
        <Menu />
      </Container>
    </S.HeaderWrapper>

    <main>
      <S.BannerWrapper id="home">
        <BannerGroup src="img/bg-banner.png" />
      </S.BannerWrapper>

      <S.AboutWrapper id="sobre">
        <AboutGroup />
      </S.AboutWrapper>

      <S.GroupDeviceWrapper>
        <GroupDevice src="img/bg-device.jpg" />
      </S.GroupDeviceWrapper>

      <S.BenefitsWrapper id="vantagens">
        <Benefits />
      </S.BenefitsWrapper>

      <S.ItemWrapper id="contato">
        <ItemBox />
      </S.ItemWrapper>

      <S.AgendaWrapper id="demonstracao">
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
