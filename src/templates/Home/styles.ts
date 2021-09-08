import styled, { css } from 'styled-components'
import media, { generateMedia } from 'styled-media-query'
const customMedia = generateMedia({
  desktop: '991px',
  tablet: '767px',
  mobile: '460px'
})

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

export const GroupDeviceWrapper = styled.div`
  margin-top: 4rem;

  ${customMedia.greaterThan('desktop')`
    margin-top: -6.3rem;
  `}
`

export const AgendaWrapper = styled.div`
  margin-top: 9rem;
  margin-bottom: 7.8rem;
`
