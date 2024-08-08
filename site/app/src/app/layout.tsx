// TODO move this directive deeper:
'use client'

import { ApolloProvider }  from '@apollo/client'

import React               from 'react'
import { Suspense }        from 'react'
import { IntlProvider }    from 'react-intl'
import { usePathname }     from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useEffect }       from 'react'

import { ThemeProvider }   from '@ui/theme'
import { getClient }       from '@globals/data'
import { progressBar }     from '@ui/progress-bar'

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    progressBar.finish()
  }, [pathname, searchParams])
  return null
}

const Bare = ({ children }) => {
  const client = getClient()

  return (
    <html>
      <body>
        <ApolloProvider client={client}>
          <IntlProvider locale='ru' defaultLocale='ru'>
            <ThemeProvider>
              {children}
              <Suspense fallback={null}>
                <NavigationEvents />
              </Suspense>
            </ThemeProvider>
          </IntlProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}

export default Bare
