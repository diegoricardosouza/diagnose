import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  ${({ theme }) => css`
    margin-right: ${theme.font.sizes.large};
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
  `}
`
