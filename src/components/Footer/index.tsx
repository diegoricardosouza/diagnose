import ItemSocial from 'components/ItemSocial'
import Logo from 'components/Logo'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.SocialWrapper>
      <Link href="https://www.instagram.com/diagnose.pro/" passHref>
        <a target="_blank">
          <ItemSocial src="img/icons/instagram.svg" title="@diagnose.pro" />
        </a>
      </Link>

      <Link href="https://www.facebook.com/Diagnose.Pro.Software" passHref>
        <a target="_blank">
          <ItemSocial
            src="img/icons/facebook.svg"
            title="/Diagnose.Pro.Software"
          />
        </a>
      </Link>

      <Link
        href="https://api.whatsapp.com/send?phone=5541920001038&amp;text=Quero mais informações"
        passHref
      >
        <a target="_blank">
          <ItemSocial src="img/icons/whatsapp.svg" title="(41) 92000-1038" />
        </a>
      </Link>

      <Link href="mailto: comercial@lpt4.com.br" passHref>
        <a target="_blank">
          <ItemSocial src="img/icons/email.svg" title="comercial@lpt4.com.br" />
        </a>
      </Link>
    </S.SocialWrapper>

    <Logo padrao={false} />

    <S.WhatsWrapper>
      <span>Fale com nossos atendentes</span>

      <a
        href="https://api.whatsapp.com/send?phone=5541920001038&text=Ol%C3%A1!%20Acessei%20atrav%C3%A9s%20do%20website.%20Gostaria%20de%20tirar%20umas%20d%C3%BAvidas."
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/whatsapp.png" alt="Whatsapp" width={60} height={60} />
      </a>
    </S.WhatsWrapper>
  </S.Wrapper>
)

export default Footer
