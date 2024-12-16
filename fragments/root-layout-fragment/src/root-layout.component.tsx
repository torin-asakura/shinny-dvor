import '@ui/theme'

import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { RootLayoutProps }   from './root-layout.interfaces.js'

import { IBM_Plex_Sans }          from 'next/font/google'
import { Suspense }               from 'react'
import { memo }                   from 'react'
import React                      from 'react'

import { ApolloWrapper }          from '@globals/data/apollo'
import { Gtag }                   from '@ui/gtag'
import { GLOBAL_THEME_ID }        from '@ui/theme'

import { NavigationEvents }       from './hooks/index.js'
import { RoolLayoutProviders }    from './root-layout.providers.js'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = memo(({ children, messages }) => {
  const gaTrackingId = process.env.GA_TRACKING_ID || 'GTM-T267QVHF'

  return (
    <html className={ibmPlexSans.className}>
      <body id={GLOBAL_THEME_ID}>
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
