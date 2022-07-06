import { ApolloClient }   from '@apollo/client'
import { InMemoryCache }  from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { withHelmet }     from '@atls/next-app-with-helmet'

import App                from 'next/app'
import React              from 'react'
import compose            from 'recompose/compose'

import { ThemeProvider }  from '@ui/theme'

export const withProviders = compose(withHelmet())

const Bare = ({ Component, pageProps, props }) => {
  const client = new ApolloClient({
    uri: process.env.WP_ENDPOINT || '',
    cache: new InMemoryCache(),
  })

  const Composed = withProviders(App)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Composed Component={Component} {...pageProps} {...props} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Bare
