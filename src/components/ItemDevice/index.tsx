import * as S from './styles'

export type ItemDeviceProps = {
  src: string
}

const ItemDevice = ({ src }: ItemDeviceProps) => (
  <S.Wrapper>
    <S.Image src={src} />
  </S.Wrapper>
)

export default ItemDevice
