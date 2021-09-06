import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 2rem;
    position: relative;
    padding-left: 1.2rem;
    list-style: none;
    line-height: 3.2rem;

    &::after {
      content: '';
      position: absolute;
      top: 1.2rem;
      left: 0;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: ${theme.colors.white};
    }

    ${media.greaterThan('medium')`
      font-size: 2.2rem;
    `}
  `}
`
