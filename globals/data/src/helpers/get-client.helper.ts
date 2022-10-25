import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

export const getClient = () =>
  new ApolloClient({
    uri: 'https://wp.shdvor.pro/graphql',
    cache: new InMemoryCache(),
  })
