import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-family: ${theme.font.raleway};
  `}
`

export const Title = styled.h2`
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 500;
  margin: 0 0 1.8rem 0;

  span {
    font-weight: 600;
    font-style: italic;
  }

  ${media.greaterThan('medium')`
    font-size: 4rem;
    line-height: 5rem;
  `}
`

export const Content = styled.div`
  font-size: 2.3rem;
  line-height: 3.3rem;
  font-weight: 500;

  p {
    margin: 0;
  }

  strong {
    font-weight: 700;
  }

  span {
    font-style: italic;
  }

  ${media.greaterThan('medium')`
    font-size: 2.8rem;
    line-height: 3.8rem;
  `}
`
