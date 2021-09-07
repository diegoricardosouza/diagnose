import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} 0;

    ${media.greaterThan('medium')`
      min-height: 9rem;
      display: flex;
      align-items: center;
    `}
  `}
`

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    padding: ${theme.spacings.small} 0;

    ${media.greaterThan('medium')`
      min-height: 12.6rem;
    `}
  `}
`

export const BenefitsWrapper = styled.div`
  margin-bottom: 9rem;
`
