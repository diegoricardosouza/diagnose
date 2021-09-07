import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  text-align: center;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.white};
    font-family: ${theme.font.raleway};
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 3.2rem;
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.white};
    font-size: 2.2rem;
    font-style: italic;
    line-height: 3.2rem;
  `}
`
