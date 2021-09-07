import * as S from './styles'

export type AboutHighLightProps = {
  title: string
  src: string
}

const AboutHighLight = ({ title, src }: AboutHighLightProps) => (
  <S.Wrapper>
    <S.TitleWrapper>
      <S.Title dangerouslySetInnerHTML={{ __html: title }} />
    </S.TitleWrapper>

    <S.Image src={src} />
  </S.Wrapper>
)

export default AboutHighLight
