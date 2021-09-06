import * as S from './styles'

export type ImageItemProps = {
  src: string
}

const ImageItem = ({ src }: ImageItemProps) => (
  <S.Wrapper>
    <S.Image src={src} />
  </S.Wrapper>
)

export default ImageItem
