import * as S from './styles'

export type BannerImageProps = {
  src: string
}

const BannerImage = ({ src }: BannerImageProps) => <S.Wrapper src={src} />

export default BannerImage
