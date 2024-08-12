'use client'

import { ApolloProvider }  from '@apollo/client'
import { Gtag }            from '@ui/gtag'

import React               from 'react'
import { Suspense }        from 'react'
import { IntlProvider }    from 'react-intl'
import { usePathname }     from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useEffect }       from 'react'

import { ThemeProvider }   from '@ui/theme'
import { getClient }       from '@globals/data'
import { progressBar }     from '@ui/progress-bar'

// TODO move to hooks
export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    progressBar.finish()
  }, [pathname, searchParams])
  return null
}

// TODO interface
export const RootLayout = ({ children, messages, gaTrackingId }) => {
  const client = getClient()

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
}
