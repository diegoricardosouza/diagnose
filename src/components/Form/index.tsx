import styled, { css } from 'styled-components'

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`

export const FormError = styled.div`
  ${({ theme }) => css`
    margin: 0 0 0.7rem 0;
    text-align: center;
    color: red;
    font-size: ${theme.font.sizes.small};
    letter-spacing: 0.1rem;

    svg {
      width: 1.8rem;
    }
  `}
`

export const FormSuccess = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    background: #6da962;
    margin: 0 3rem 1.5rem 3rem;
    padding: 1rem 0;
    border-radius: 0.3rem;

    svg {
      color: ${theme.colors.white};
      width: 2.4rem;
      margin-right: 0.8rem;
    }
  `}
`
