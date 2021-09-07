import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  desktop: '991px',
  tablet: '767px',
  mobile: '460px'
})

export const Wrapper = styled.div`
  position: relative;
  min-height: 44.5rem;
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 100%;
    padding: 2rem;

    ${customMedia.greaterThan('tablet')`
      width: 100%;
      padding: 2.4rem 3.2rem;
    `}

    ${customMedia.greaterThan('desktop')`
      position: absolute;
      left: 0;
      bottom: 7.6rem;
      width: 95%;
      padding: 2.4rem 0 2.4rem 3.2rem;
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.white};
    font-family: ${theme.font.raleway};
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 500;
    display: inline-block;
    text-align: center;

    span {
      font-weight: 600;
      font-style: italic;
    }

    strong {
      font-weight: 700;
    }

    ${customMedia.greaterThan('tablet')`
      display: block;
      font-size: 3rem;
      line-height: 4rem;
    `}

    ${customMedia.greaterThan('desktop')`
      display: inline-block;
      font-size: 3rem;
      line-height: 4rem;
    `}
  `}
`

export const Image = styled.img`
  display: none;

  ${customMedia.greaterThan('tablet')`
    display: none;
  `}

  ${customMedia.greaterThan('desktop')`
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
  `}
`
