import * as S from './styles'

export type AgendaTextProps = {
  title: string
  content: string
}

const AgendaText = ({ title, content }: AgendaTextProps) => (
  <S.Wrapper>
    <S.Title dangerouslySetInnerHTML={{ __html: title }} />
    <S.Content dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default AgendaText
