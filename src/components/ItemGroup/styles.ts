import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article``

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0 0 1.2rem 0;
    color: ${theme.colors.white};
    font-family: ${theme.font.raleway};
    font-weight: 600;
    font-style: italic;

    ${media.greaterThan('medium')`
      font-size: 3rem;
    `}
  `}
`

export const ItemWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
