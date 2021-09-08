import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    max-width: 33.5rem;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;

    form {
      text-align: center;
      padding: 0 3rem;
    }

    ${media.greaterThan('medium')`
      min-height: 49.5rem;
    `}
  `}
`

export const HeaderWrapper = styled.div`
  margin-bottom: 3rem;
`
