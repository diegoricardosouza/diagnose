import styled, { css } from 'styled-components'
import media, { generateMedia } from 'styled-media-query'
import * as ImageItemStyles from 'components/ImageItem/styles'

const customMedia = generateMedia({
  desktop: '991px',
  tablet: '767px',
  mobile: '460px'
})

export const Wrapper = styled.section`
  background: rgb(103, 20, 20);
  background: linear-gradient(
    0deg,
    rgba(103, 20, 20, 1) 0%,
    rgba(206, 40, 40, 1) 100%
  );
  padding-top: 5rem;
  padding-bottom: 5rem;

  ${media.greaterThan('medium')`
    background: url('img/bg-items.png') no-repeat,
    linear-gradient(0deg, rgba(103, 20, 20, 1) 0%, rgba(206, 40, 40, 1) 100%);
    background-position: top center;
    min-height: 92.7rem;
    padding-bottom: 0;
  `}
`

export const HeaderWrapper = styled.header`
  text-align: center;
  margin-bottom: 6.5rem;
`

export const AgendamentoWrapper = styled.div`
  article {
    margin-top: 2rem;
  }

  ${customMedia.greaterThan('tablet')`
    display: grid;
    grid-template-columns: 1fr 1fr;

    ${ImageItemStyles.Wrapper}{
      width: 38rem;
      height: 38rem;
    }
  `}

  ${customMedia.greaterThan('desktop')`
    ${ImageItemStyles.Wrapper}{
      width: 42rem;
      height: 42rem;
    }
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    margin: 2rem 0;
    color: ${theme.colors.secondary};
    font-family: ${theme.font.raleway};
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    background: ${theme.colors.white};
    padding: 1rem 0;

    ${customMedia.greaterThan('tablet')`
      margin: -5rem 0 0 0;
      background: transparent;
      padding: 0;
    `}

    ${customMedia.greaterThan('desktop')`
      margin: -9rem 0 0 0;
    `}
  `}
`

export const ConsultasWrapper = styled.div`
  ${customMedia.greaterThan('tablet')`
    display: grid;
    grid-template-columns: 2fr 1fr;

    article {
      padding-left: 3rem;
      margin-top: 5rem;
    }

    ${ImageItemStyles.Wrapper}{
      width: 38rem;
      height: 38rem;
      margin-top: -5rem;
    }
  `}

  ${customMedia.greaterThan('desktop')`
    article {
      justify-self: flex-end;
      margin-top: 10rem;
      padding-right: 4.5rem;
    }

    ${ImageItemStyles.Wrapper}{
      justify-self: flex-end;
      margin-top: -75px;
    }
  `}
`
