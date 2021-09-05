import ItemSocial from 'components/ItemSocial'
import Logo from 'components/Logo'
import Link from 'next/link'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.SocialWrapper>
      <Link href="#" passHref>
        <a target="_blank">
          <ItemSocial src="img/icons/instagram.svg" title="@diagnose.pro" />
        </a>
      </Link>

      <Link href="#" passHref>
        <a target="_blank">
          <ItemSocial
            src="img/icons/facebook.svg"
            title="/Diagnose.Pro.Software"
          />
        </a>
      </Link>

      <Link href="#" passHref>
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
  </S.Wrapper>
)

export default Footer
