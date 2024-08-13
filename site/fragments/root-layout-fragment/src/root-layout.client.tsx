'use client'

import type { RootLayoutClientProps } from './root-layout.interfaces.js'
import type { FC }                    from 'react'
import type { PropsWithChildren }     from 'react'

import { ApolloProvider }             from '@apollo/client'

import React                          from 'react'
import { Suspense }                   from 'react'
import { IntlProvider }               from 'react-intl'

import { Gtag }                       from '@ui/gtag'
import { ThemeProvider }              from '@ui/theme'
import { getClient }                  from '@globals/data'

import { NavigationEvents }           from './index.js'

export const RootLayoutClient: FC<PropsWithChildren<RootLayoutClientProps>> = ({
  children,
  messages,
  gaTrackingId,
}) => {
  const client = getClient()

  return (
    <>
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
    </>
  )
}
