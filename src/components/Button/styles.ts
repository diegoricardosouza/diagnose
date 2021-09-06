import styled, { css, DefaultTheme } from 'styled-components'

export type WrapperProps = {
  hasIcon: boolean
}

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 3.5rem;

      & + span {
        margin-right: ${theme.spacings.xsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${theme.colors.primary};
    background: transparent;
    color: ${theme.colors.primary};
    font-size: 2.5rem;
    line-height: 2.5rem;
    padding: ${theme.spacings.xsmall} 2rem;
    padding-right: 1rem;
    cursor: pointer;
    text-decoration: none;
    height: 6rem;

    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
