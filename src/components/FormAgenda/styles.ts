import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  form {
    text-align: center;
  }

  ${media.greaterThan('medium')`
      max-width: 27.6rem;
      min-height: 49.5rem;
    `}
`

export const HeaderWrapper = styled.div`
  margin-bottom: 3rem;
`
