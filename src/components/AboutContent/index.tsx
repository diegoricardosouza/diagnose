import * as S from './styles'

export type AboutContentProps = {
  title: string
  content: string
}

const AboutContent = ({ title, content }: AboutContentProps) => (
  <S.Wrapper>
    <S.Title dangerouslySetInnerHTML={{ __html: title }} />
    <S.Content dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default AboutContent
