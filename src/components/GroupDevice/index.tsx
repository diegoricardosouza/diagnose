import { Container } from 'components/Container'
import HeadingDevice from 'components/HeadingDevice'
import ItemDevice from 'components/ItemDevice'

import * as S from './styles'

export type GroupDeviceProps = {
  src?: string
}

const GroupDevice = ({ src }: GroupDeviceProps) => (
  <S.Wrapper src={src}>
    <S.Overlay></S.Overlay>

    <S.ContainerWrapper>
      <Container>
        <HeadingDevice
          title="SISTEMA 100% WEB"
          subtitle="compatível com todos os dispositivo"
        />

        <S.DeviceWrapper>
          <ItemDevice src="img/icons/icon-apple.png" />
          <ItemDevice src="img/icons/icon-windows.png" />
          <ItemDevice src="img/icons/icon-linux.png" />
          <ItemDevice src="img/icons/icon-android.png" />
        </S.DeviceWrapper>
      </Container>
    </S.ContainerWrapper>
  </S.Wrapper>
)

export default GroupDevice
