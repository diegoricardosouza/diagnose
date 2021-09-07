import styled from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  desktop: '99.1em',
  tablet: '76.7em',
  mobile: '46em'
})

export const Wrapper = styled.article``

export const WrapperHeading = styled.div`
  text-align: center;
  margin: 0 0 4rem 0;

  ${media.greaterThan('medium')`
    margin: 0 0 13.8rem 0;
  `}
`

export const WrapperContent = styled.div`
  position: relative;
  text-align: center;

  > div {
    margin-bottom: 3rem;
  }

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}

  ${customMedia.greaterThan('desktop')`
    display: block;
    padding-bottom: 7rem;

    > div {
      position: absolute;
      margin: 0;
    }
  `}
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: none;

  ${customMedia.greaterThan('desktop')`
    display: block;
    margin: 0 auto;
  `}
`

export const ItemOne = styled.div`
  top: 17rem;
  left: 0;
`

export const ItemTwo = styled.div`
  top: -11rem;
  left: 15rem;
`

export const ItemThree = styled.div`
  top: -9rem;
  right: 14rem;
`

export const ItemFour = styled.div`
  left: 15rem;
  bottom: 6rem;
`

export const ItemFive = styled.div`
  right: 12rem;
  bottom: 0;
`

export const ItemSix = styled.div`
  right: 0;
  bottom: 27rem;
`
