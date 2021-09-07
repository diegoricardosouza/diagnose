import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

export type WrapperProps = Pick<HeadingProps, 'color'>

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color }) => css`
    ${!!color && wrapperModifiers[color](theme)};
    font-family: ${theme.font.raleway};
    font-size: 3.3rem;
    font-weight: 700;
    line-height: 1;

    ${media.greaterThan('medium')`
      font-size: 4rem;
    `}
  `}
`
