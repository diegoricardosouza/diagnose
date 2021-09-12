import { KeyboardArrowDown } from '@styled-icons/material-outlined'
import { Link } from 'react-scroll'

import BannerImage from 'components/BannerImage'
import BannerText from 'components/BannerText'
import Button from 'components/Button'
import { Container } from 'components/Container'
import FormBanner from 'components/FormBanner'
import * as S from './styles'

export type BannerGroupProps = {
  src: string
}

const BannerGroup = ({ src }: BannerGroupProps) => (
  <S.Wrapper src={src}>
    <Container>
      <S.ContentWrapper>
        <S.FormWrapper>
          <FormBanner />
        </S.FormWrapper>

        <S.TextWrapper>
          <BannerText
            align="right"
            title="Diagnose Pró"
            text="<p>O <span>Sistema Web</span> mais<br> completo para <strong>Gestão de</strong><br> <strong>clínicas e consultórios!</strong></p>"
          />

          <S.ImageWrapper>
            <BannerImage src="img/img-banner.png" />
          </S.ImageWrapper>
        </S.TextWrapper>
      </S.ContentWrapper>

      <S.ButtonWrapper>
        <Button icon={<KeyboardArrowDown />} as="div">
          <Link to="sobre" spy={true} smooth={true} offset={-90}>
            Saiba mais
          </Link>
        </Button>
      </S.ButtonWrapper>
    </Container>
  </S.Wrapper>
)

export default BannerGroup
