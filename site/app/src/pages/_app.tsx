import { ApolloProvider } from '@apollo/client'

import React              from 'react'
import { IntlProvider }   from 'react-intl'

import { ThemeProvider }  from '@ui/theme'
import { getClient }      from '@globals/data'

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
