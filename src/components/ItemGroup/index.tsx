import Item, { ItemProps } from 'components/Item'
import * as S from './styles'

export type ItemGroupProps = {
  title?: string
  items: ItemProps[]
}

const ItemGroup = ({ title, items }: ItemGroupProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>

    <S.ItemWrapper>
      {items.map((item, index) => (
        <Item key={index} title={item.title} />
      ))}
    </S.ItemWrapper>
  </S.Wrapper>
)

export default ItemGroup
