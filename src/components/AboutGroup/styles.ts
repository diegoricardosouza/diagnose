import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  desktop: '991px',
  tablet: '767px',
  mobile: '460px'
})

export const Wrapper = styled.article``

export const AboutContentWrapper = styled.div``

export const AboutHighLightWrapper = styled.div`
  margin-top: 3rem;

  ${customMedia.greaterThan('desktop')`
    margin-top: -20.4rem;
  `}
`
