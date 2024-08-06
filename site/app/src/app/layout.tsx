// TODO move this directive deeper:
'use client'

import { ApolloProvider } from '@apollo/client'

import Router             from 'next/navigation'
import React              from 'react'
import { IntlProvider }   from 'react-intl'

import { ThemeProvider }  from '@ui/theme'
import { getClient }      from '@globals/data'

// import { progressBar }    from '@ui/progress-bar'

// TODO router
// Router.events.on('routeChangeStart', progressBar.start)
// Router.events.on('routeChangeComplete', progressBar.finish)
// Router.events.on('routeChangeError', progressBar.finish)

// TODO to root layout

const Bare = ({ children }) => {
  const client = getClient()

  // было внутри. чтоэто такое вообще?
  // <Component {...props} {...pageProps} />

  return (
    <html>
      <body>
        <ApolloProvider client={client}>
          <IntlProvider locale='ru' defaultLocale='ru'>
            <ThemeProvider>{children}</ThemeProvider>
          </IntlProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}

export default Bare
