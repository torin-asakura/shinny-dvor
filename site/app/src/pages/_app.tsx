import '@splidejs/splide/dist/css/splide.min.css'

import { withApollo }    from '@atls/next-app-with-apollo'
import { withHelmet }    from '@atls/next-app-with-helmet'

import NextApp           from 'next/app'
import React             from 'react'
import compose           from 'recompose/compose'

import { ThemeProvider } from '@ui/theme'

export const withProviders = compose(
  withApollo({
    uri: process.env.WP_ENDPOINT || '',
    onUnauthenticated: () => {}, // eslint-disable-line
  }),
  withHelmet()
)

const App = (props) => {
  const WithProviders = withProviders(NextApp)

  return (
    <ThemeProvider>
      <WithProviders {...props} />
    </ThemeProvider>
  )
}

export default App
