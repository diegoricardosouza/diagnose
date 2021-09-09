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
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    svg {
      color: ${theme.colors.secondary};
      width: 2.4rem;
    }
  `}
`
