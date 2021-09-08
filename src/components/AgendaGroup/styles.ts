import styled from 'styled-components'
import * as AgendaStyles from 'components/AgendaText/styles'
import * as FormAgendaStyles from 'components/FormAgenda/styles'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${FormAgendaStyles.Wrapper} {
    margin-top: 3.5rem;
  }

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${FormAgendaStyles.Wrapper} {
      justify-self: flex-end;
      margin-top: 0;
    }
  `}
`

export const TextWrapper = styled.div`
  ${AgendaStyles.Wrapper} {
    margin-bottom: 2.8rem;
  }
`
