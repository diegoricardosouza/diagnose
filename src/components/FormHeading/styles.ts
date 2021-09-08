import styled, { css, DefaultTheme } from 'styled-components'
import { FormHeadingProps } from '.'

type wrapperProps = Pick<FormHeadingProps, 'color'>

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    ${Title} {
      color: ${theme.colors.secondary};
    }
    ${Subtitle} {
      color: ${theme.colors.secondary};
    }
  `,
  white: (theme: DefaultTheme) => css`
    ${Title} {
      color: ${theme.colors.white};
    }
    ${Subtitle} {
      color: ${theme.colors.white};
    }
  `
}

export const Wrapper = styled.header<wrapperProps>`
  ${({ theme, color }) => css`
    text-align: center;
    ${!!color && wrapperModifiers[color](theme)};
  `}
`

export const Title = styled.h2`
  margin: 0 0 0.7rem 0;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 2.5rem;
`

export const Subtitle = styled.p`
  margin: 0;
  font-size: 2rem;
  line-height: 2.4rem;
`
