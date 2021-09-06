import * as S from './styles'

export type BannerTextProps = {
  title: string
  text: string
  align?: 'left' | 'right'
}

const BannerText = ({ title, text, align = 'right' }: BannerTextProps) => (
  <S.Wrapper align={align}>
    <S.Title>{title}</S.Title>
    <S.Text dangerouslySetInnerHTML={{ __html: text }} />
  </S.Wrapper>
)

export default BannerText
