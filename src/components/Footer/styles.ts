import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${media.greaterThan('medium')`
    justify-content: space-between;
  `}

  a {
    text-decoration: none;
  }
`

export const SocialWrapper = styled.div`
  ${({ theme }) => css`
    a {
      display: block;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
    `}
  `}
`
