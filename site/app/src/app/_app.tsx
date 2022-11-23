import { ApolloProvider } from '@apollo/client'

import Router             from 'next/router'
import React              from 'react'
import { IntlProvider }   from 'react-intl'

import { ThemeProvider }  from '@ui/theme'
import { getClient }      from '@globals/data'
import { progressBar }    from '@ui/progress-bar'

Router.events.on('routeChangeStart', progressBar.start)
Router.events.on('routeChangeComplete', progressBar.finish)
Router.events.on('routeChangeError', progressBar.finish)

const Bare = ({ Component, pageProps, props }) => {
  const client = getClient()

  return (
    <ApolloProvider client={client}>
      <IntlProvider locale='ru' defaultLocale='ru'>
        <ThemeProvider>
          <Component {...props} {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    </ApolloProvider>
  )
}

export default Bare
