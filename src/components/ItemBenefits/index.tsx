import * as S from './styles'

export type ItemBenefitsProps = {
  title: string
  src: string
}

const ItemBenefits = ({ title, src }: ItemBenefitsProps) => (
  <S.Wrapper>
    <S.IconWrapper>
      <S.Icon src={src} />
    </S.IconWrapper>

    <S.Title dangerouslySetInnerHTML={{ __html: title }} />
  </S.Wrapper>
)

export default ItemBenefits
