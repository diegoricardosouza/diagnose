import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  form {
    text-align: center;
  }

  ${media.greaterThan('medium')`
    max-width: 27.6rem;
  `}
`

export const HeaderWrapper = styled.div`
  margin-bottom: 3rem;
`
