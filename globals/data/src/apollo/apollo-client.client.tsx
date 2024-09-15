'use client'

import type { PropsWithChildren }  from 'react'
import type { FC }                 from 'react'

import { HttpLink }                from '@apollo/client'
import { ApolloClient }            from '@apollo/experimental-nextjs-app-support'
import { ApolloNextAppProvider }   from '@apollo/experimental-nextjs-app-support'
import { InMemoryCache }           from '@apollo/experimental-nextjs-app-support'
import { defaultDataIdFromObject } from '@apollo/client'

import React                       from 'react'

import { GRAPHQL_API_URL }         from './apollo.constants.js'

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_API_URL,
    credentials: 'same-origin',
    fetchOptions: { cache: 'force-cache' },
  })

  return new ApolloClient({
    cache: new InMemoryCache({
      dataIdFromObject(responseObject) {
        switch (responseObject.__typename) {
          case 'Post':
            if (responseObject.seo) {
              // @ts-expect-error not exist
              return `PostBy:${responseObject.seo.title}`
            } else if (responseObject.postId) {
              return `PostBy:${responseObject.postId}`
            } else if (responseObject.uri) {
              return `PostBy:${responseObject.uri}`
            } else {
              return defaultDataIdFromObject(responseObject)
            }
          case 'Service':
            return `ServiceBy:${responseObject.uri}`
          default:
            return defaultDataIdFromObject(responseObject)
        }
      },
    }),
    // @ts-ignore:next-line
    link: httpLink,
    ssrMode: true,
    connectToDevTools: true,
  })
}

export const ApolloWrapper: FC<PropsWithChildren> = ({ children }) => (
  <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
)
