import * as S from './styles'

export type FormHeadingProps = {
  title: string
  subtitle: string
  color: 'normal' | 'white'
}

const FormHeading = ({
  title,
  subtitle,
  color = 'normal'
}: FormHeadingProps) => (
  <S.Wrapper color={color}>
    <S.Title>{title}</S.Title>
    <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
  </S.Wrapper>
)

export default FormHeading
