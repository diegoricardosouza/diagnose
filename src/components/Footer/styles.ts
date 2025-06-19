import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as LogoStyles from 'components/Logo/styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}

  a {
    text-decoration: none;
  }

  ${LogoStyles.Logo} {
    justify-self: flex-end;
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
export const WhatsWrapper = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;

  span {
    position: absolute;
    right: 115%;
    top: 5px;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    padding: 8px 12px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    transition: all 0.3s;
    min-width: 120px;
    opacity: 0;
    visibility: hidden;

    &::before {
      content: '';
      width: 16px;
      height: 16px;
      transform: rotate(45deg);
      background: #fff;
      position: absolute;
      bottom: 0;
      top: 0;
      z-index: 10;
      right: -4px;
      margin: auto;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
