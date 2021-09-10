import styled from 'styled-components'
import media from 'styled-media-query'
import * as FormStyles from 'components/Form'

export const Wrapper = styled.article`
  form {
    text-align: center;
  }

  ${FormStyles.FormSuccess} {
    margin: 0 0 1.5rem 0;
  }

  ${media.greaterThan('medium')`
    max-width: 27.6rem;
  `}
`

export const HeaderWrapper = styled.div`
  margin-bottom: 3rem;
`
