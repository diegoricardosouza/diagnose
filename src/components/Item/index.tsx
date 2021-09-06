import * as S from './styles'

export type ItemProps = {
  item: string
}

const Item = ({ item }: ItemProps) => <S.Wrapper>{item}</S.Wrapper>

export default Item
