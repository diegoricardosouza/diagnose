import styled, { css } from 'styled-components'

export const Wrapper = styled.article``

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0 0 1.2rem 0;
    color: ${theme.colors.white};
    font-family: ${theme.font.raleway};
    font-weight: 600;
    font-style: italic;
  `}
`

export const ItemWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
