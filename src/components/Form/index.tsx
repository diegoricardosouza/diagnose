import styled, { css } from 'styled-components'

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`

export const FormError = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: red;
    font-size: ${theme.font.sizes.small};
    svg {
      width: 1.6rem;
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
