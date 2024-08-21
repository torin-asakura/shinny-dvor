'use client'

import { ApolloProvider }    from '@apollo/client'

import React                 from 'react'
import { FC }                from 'react'
import { Suspense }          from 'react'
import { PropsWithChildren } from 'react'
import { IntlProvider }      from 'react-intl'
import { memo }              from 'react'

import { Gtag }              from '@ui/gtag'
import { ThemeProvider }     from '@ui/theme'
import { getClient }         from '@globals/data'

import { NavigationEvents }  from './hooks/index.js'
import { RootLayoutProps }   from './root-layout.interfaces.js'

export const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = memo(({ children, messages }) => {
  const client = getClient()

  const gaTrackingId = process.env.GA_TRACKING_ID || 'GTM-TPXQGZP'

  return (
    <html>
      <body>
        <ApolloProvider client={client}>
          <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
            <ThemeProvider>
              {children}
              <Suspense fallback={null}>
                <NavigationEvents />
              </Suspense>
            </ThemeProvider>
          </IntlProvider>
        </ApolloProvider>
        <Gtag gaTrackingId={gaTrackingId} />
      </body>
    </html>
  )
})
