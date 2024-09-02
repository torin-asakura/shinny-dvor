import React                   from 'react'
import { FC }                  from 'react'
import { Suspense }            from 'react'
import { PropsWithChildren }   from 'react'
import { memo }                from 'react'

import { ApolloWrapper }       from '@globals/data'
import { Gtag }                from '@ui/gtag'

import { NavigationEvents }    from './hooks/index.js'
import { RootLayoutProps }     from './root-layout.interfaces.js'
import { RoolLayoutProviders } from './root-layout.providers.js'

export const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = memo(({ children, messages }) => {
  const gaTrackingId = process.env.GA_TRACKING_ID || 'GTM-TPXQGZP'

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
