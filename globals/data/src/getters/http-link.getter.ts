import { HttpLink }        from '@apollo/client'

import { GRAPHQL_API_URL } from '../apollo/apollo.constants.js'

export const getApolloHttpLink = (): HttpLink => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_API_URL,
    credentials: 'include',
  })

  return httpLink
}
