import * as S from './styles'

export type HeadingDeviceProps = {
  title: string
  subtitle?: string
}

const HeadingDevice = ({ title, subtitle }: HeadingDeviceProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Wrapper>
)

export default HeadingDevice
