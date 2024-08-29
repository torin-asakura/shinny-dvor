'use client'

import type { PropsWithChildren } from 'react'
import type { FC }                from 'react'

import { HttpLink }               from '@apollo/client'
import { ApolloClient }           from '@apollo/experimental-nextjs-app-support'
import { ApolloNextAppProvider }  from '@apollo/experimental-nextjs-app-support'
import { InMemoryCache }          from '@apollo/experimental-nextjs-app-support'

import React                      from 'react'

import { isServerSide }           from './apollo.constants.js'
import { serverUri }              from './apollo.constants.js'
import { clientUri }              from './apollo.constants.js'

export const makeClient = () => {
  const httpLink = new HttpLink({
    uri: isServerSide ? serverUri : clientUri,
    credentials: 'include',
    fetchOptions: { cache: 'force-cache' },
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    connectToDevTools: true,
  })
}

export const ApolloWrapper: FC<PropsWithChildren> = ({ children }) => (
  <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
)
