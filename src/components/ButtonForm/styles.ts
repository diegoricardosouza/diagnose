import styled, { css } from 'styled-components'
import { darken } from 'polished'

export type WrapperProps = {
  hasIcon: boolean
}

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: 2rem;
    font-weight: 500;
    line-height: 2rem;
    padding: 0 2rem;
    min-width: 12.2rem;
    cursor: pointer;
    height: 3.8rem;
    border-radius: 0.3rem;
    transition: all 0.3s;

    &:hover {
      background: ${darken(0.2, theme.colors.primary)};
    }
  `}
`
