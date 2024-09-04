'use server'

import { HttpLink }             from '@apollo/client'
import { ApolloClient }         from '@apollo/experimental-nextjs-app-support'
import { InMemoryCache }        from '@apollo/experimental-nextjs-app-support'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'

import { GRAPHQL_API_URL }      from './apollo.constants.js'

const { getClient, PreloadQuery } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      connectToDevTools: true,
      // @ts-ignore:next-line
      link: new HttpLink({
        uri: GRAPHQL_API_URL,
        credentials: 'include',
      }),
    })
)

export { getClient as getServerClient }
export { PreloadQuery }
