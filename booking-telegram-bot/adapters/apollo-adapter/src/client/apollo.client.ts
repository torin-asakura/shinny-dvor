import { ApolloClient }  from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/core'

const client = new ApolloClient({
  uri: process.env.GRAPHQL_API_URL || 'https://wp.shdvor.pro/graphql',
  cache: new InMemoryCache(),
})

export { client }
