import * as S from './styles'

export type ItemProps = {
  title: string
}

const Item = ({ title }: ItemProps) => (
  <S.Wrapper dangerouslySetInnerHTML={{ __html: title }} />
)

export default Item
