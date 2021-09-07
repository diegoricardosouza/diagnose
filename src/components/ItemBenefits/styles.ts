import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  max-width: 26.8rem;
  text-align: center;
  margin: 0 auto;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    background: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      width: 16.6rem;
      height: 16.6rem;
    `}
  `}
`

export const Icon = styled.img``

export const Title = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0 0 0;
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 3rem;
  `}
`
