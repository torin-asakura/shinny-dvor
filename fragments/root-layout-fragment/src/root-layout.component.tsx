'use client'

import { FC }                from 'react'
import { Suspense }          from 'react'
import { PropsWithChildren } from 'react'
import { IntlProvider }      from 'react-intl'
import { memo }              from 'react'
import React                 from 'react'

import { ApolloWrapper }     from '@globals/data'
import { Gtag }              from '@ui/gtag'
import { ThemeProvider }     from '@ui/theme'

import { NavigationEvents }  from './hooks/index.js'
import { RootLayoutProps }   from './root-layout.interfaces.js'

export const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = memo(({ children, messages }) => {
  const gaTrackingId = process.env.GA_TRACKING_ID || 'GTM-TPXQGZP'

  return (
    <html>
      <body>
        <ApolloWrapper>
          <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
            <ThemeProvider>
              {children}
              <Suspense fallback={null}>
                <NavigationEvents />
              </Suspense>
            </ThemeProvider>
          </IntlProvider>
        </ApolloWrapper>
        <Gtag gaTrackingId={gaTrackingId} />
      </body>
    </html>
  )
})
