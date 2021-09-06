import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { BannerTextProps } from '.'

export type WrapperProps = Pick<BannerTextProps, 'align'>

const wrapperModifiers = {
  left: () => css`
    text-align: left;
  `,
  right: () => css`
    text-align: right;
  `
}

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, align }) => css`
    ${!!align && wrapperModifiers[align]};
    font-family: ${theme.font.raleway};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    display: inline-flex;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    height: ${theme.spacings.xxlarge};
    align-items: center;
    font-size: 2.5rem;
    font-weight: 700;
    padding: 0 1.1rem;
    margin-bottom: 2rem;

    ${media.greaterThan('medium')`
      font-size: 3.5rem;
    `}
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 500;
    font-size: 2.5rem;

    ${media.greaterThan('medium')`
      font-size: 4.5rem;
      line-height: 5.5rem;
    `}

    p {
      margin: 0;
    }

    span {
      font-weight: 600;
      font-style: italic;
    }

    strong {
      font-weight: 700;
    }
  `}
`
