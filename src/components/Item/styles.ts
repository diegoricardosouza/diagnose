import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 2.2rem;
    position: relative;
    padding-left: 1.2rem;
    list-style: none;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      transform: translateY(-50%);
      background: ${theme.colors.white};
    }
  `}
`
