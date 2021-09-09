import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { BannerGroupProps } from '.'
import * as FormBannerStyles from 'components/FormBanner/styles'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.article<BannerGroupProps>`
  ${({ theme, src }) => css`
    background: ${theme.colors.primary};
    padding-top: 3rem;
    padding-bottom: 3rem;

    ${media.greaterThan('medium')`
      background: url(${src}) top center no-repeat;
      min-height: 79.4rem;
      padding-top: 5.5rem;
      padding-bottom: 0;
    `}
  `}
`

export const ContentWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 40rem 1fr;
  `}
`

export const FormWrapper = styled.div`
  article {
    margin: 0 auto;
  }

  ${media.greaterThan('medium')`
    margin-top: 15.4rem;

    article {
      margin: 0;
    }

    ${FormBannerStyles.Wrapper} {
      clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 100%);
    }
  `}
`

export const ImageWrapper = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
    margin-top: 6rem;
  `}
`

export const TextWrapper = styled.div``

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      ${ButtonStyles.Wrapper} {
        color: ${theme.colors.white};
        border-color: ${theme.colors.white};
      }
    `}

    text-align: center;
    margin-top: 1.5rem;
  `}
`
