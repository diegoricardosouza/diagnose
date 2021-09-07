import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 27rem;
    height: 27rem;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0.5rem 0.5rem 0.5rem ${theme.colors.secondary};
    margin: 0 auto;

    ${media.greaterThan('medium')`
      width: 42rem;
      height: 42rem;
    `}
  `}
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`
