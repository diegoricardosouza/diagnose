import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type WrapperProps = { error?: boolean }

type InputWrapperProps = Pick<TextFieldProps, 'color'>

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
  `,
  normal: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    border-color: ${theme.colors.white};
    ${Input} {
      color: ${theme.colors.black};
    }
  `,
  black: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    border-color: ${theme.colors.secondary};
    ${Input} {
      color: ${theme.colors.white};
      &::placeholder {
        color: ${theme.colors.white};
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
          ${theme.colors.secondary} inset;
        filter: none;
        -webkit-text-fill-color: ${theme.colors.white};
      }
    }
  `
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, color }) => css`
    display: flex;
    border-radius: 0.3rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    ${!!color && wrapperModifiers[color](theme)};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.white}
        inset;
      filter: none;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    margin: 0.5rem 0 0 0;
    color: ${theme.colors.red};
    font-size: 1.4rem;
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    margin-bottom: 2.5rem;
    ${error && wrapperModifiers.error(theme)}
  `}
`
