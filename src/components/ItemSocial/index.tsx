import * as S from './styles'

export type ItemSocialProps = {
  title: string
  src: string
}

const ItemSocial = ({ title, src }: ItemSocialProps) => (
  <S.Wrapper>
    <S.Icon src={src} />
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default ItemSocial
