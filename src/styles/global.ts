import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('fonts/roboto-v27-latin-italic.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('fonts/roboto-v27-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('fonts/roboto-v27-latin-500.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('fonts/raleway-v22-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('fonts/raleway-v22-latin-500.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('fonts/raleway-v22-latin-700.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('fonts/raleway-v22-latin-500italic.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('fonts/raleway-v22-latin-600italic.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}
`

export default GlobalStyles
