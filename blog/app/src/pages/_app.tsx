import ProgressBar        from '@badrap/bar-of-progress'
import { ApolloProvider } from '@apollo/client'

import React              from 'react'
import { Router }         from 'next/router'
import { IntlProvider }   from 'react-intl'

import { ThemeProvider }  from '@ui/theme'
import { getClient }      from '@globals/data'

const progress = new ProgressBar({
  size: 6,
  color: '#4579ff',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

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
