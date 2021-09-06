import * as S from './styles'

export type HeadingProps = {
  color: 'normal' | 'white'
  children: string
}

const Heading = ({ children, color = 'normal' }: HeadingProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
)

export default Heading
