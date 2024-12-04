/* eslint-disable */

import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { RootLayoutProps }   from './root-layout.interfaces.js'

import { Suspense }               from 'react'
import { memo }                   from 'react'
import React                      from 'react'

import { ApolloWrapper }          from '@globals/data/apollo'
import { Gtag }                   from '@ui/gtag'

import { NavigationEvents }       from './hooks/index.js'
import { RoolLayoutProviders }    from './root-layout.providers.js'

export const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = memo(({ children, messages }) => {
  const gaTrackingId = process.env.GA_TRACKING_ID || 'GTM-T267QVHF'

  return (
    <html>
      <body>
        <ApolloWrapper>
          <RoolLayoutProviders messages={messages}>
            {children}
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
          </RoolLayoutProviders>
        </ApolloWrapper>
        <Gtag gaTrackingId={gaTrackingId} />
      </body>
    </html>
  )
})
