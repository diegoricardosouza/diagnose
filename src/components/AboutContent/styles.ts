import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0 0 2.4rem 0;
    font-family: ${theme.font.raleway};
    font-size: 3rem;
    line-height: 3.5rem;
    color: ${theme.colors.secondary};
    font-weight: 500;

    span {
      font-weight: 600;
      font-style: italic;
    }

    strong {
      font-weight: 700;
    }

    ${media.greaterThan('medium')`
      font-size: 3.8rem;
      line-height: 4.8rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 2.5rem;
    line-height: 3.5rem;
    font-weight: 400;

    span {
      font-weight: 500;
    }

    ${media.greaterThan('medium')`
      font-size: 2.2rem;
      line-height: 3.2rem;
    `}
  `}
`
