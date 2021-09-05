import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from 'styles/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'diagnose-light',
    values: [
      {
        name: 'diagnose-light',
        value: theme.colors.white
      },
      {
        name: 'diagnose-dark',
        value: theme.colors.primary
      },
      {
        name: 'diagnose-gray',
        value: theme.colors.secondary
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
