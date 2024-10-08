/* eslint-disable */

'use server'

import { HttpLink }                from '@apollo/client'
import { ApolloClient }            from '@apollo/experimental-nextjs-app-support'
import { InMemoryCache }           from '@apollo/experimental-nextjs-app-support'
import { defaultDataIdFromObject } from '@apollo/client'
import { registerApolloClient }    from '@apollo/experimental-nextjs-app-support'

import { GRAPHQL_API_URL }         from './apollo.constants.js'

const { getClient, PreloadQuery } = registerApolloClient(
  () =>
    new ApolloClient({
      // cache: new InMemoryCache(),
      cache: new InMemoryCache({
        dataIdFromObject(responseObject) {
          switch (responseObject.__typename) {
            case 'Post':
              if (responseObject.seo) {
                // @ts-expect-error not exist
                return `PostBy:${responseObject.seo.title}`
              }
              if (responseObject.postId) {
                return `PostBy:${responseObject.postId}`
              }
              if (responseObject.uri) {
                return `PostBy:${responseObject.uri}`
              }
              return defaultDataIdFromObject(responseObject)

            case 'Service':
              return `ServiceBy:${responseObject.uri}`
            default:
              return defaultDataIdFromObject(responseObject)
          }
        },
      }),
      connectToDevTools: true,
      // @ts-ignore
      link: new HttpLink({
        uri: GRAPHQL_API_URL,
        credentials: 'include',
      }),
    })
)

export { getClient as getServerClient }
export { PreloadQuery }
