import { HttpLink }             from '@apollo/client'
import { ApolloClient }         from '@apollo/experimental-nextjs-app-support'
import { InMemoryCache }        from '@apollo/experimental-nextjs-app-support'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'

import { serverUri }            from './apollo.constants.js'

const { getClient, PreloadQuery } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      connectToDevTools: true,
      link: new HttpLink({
        uri: serverUri,
        credentials: 'include',
      }),
    })
)

export { getClient as getServerClient }
export { PreloadQuery }
