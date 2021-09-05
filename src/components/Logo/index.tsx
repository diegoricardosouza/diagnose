import * as S from './styles'

export type LogoProps = {
  padrao: boolean
}

const Logo = ({ padrao = true }: LogoProps) => (
  <>
    {padrao ? (
      <S.Logo src="img/logo.png" />
    ) : (
      <S.Logo src="img/logo-white.png" />
    )}
  </>
)

export default Logo
