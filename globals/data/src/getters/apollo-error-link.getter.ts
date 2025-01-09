import type { ApolloLink }    from '@apollo/client'
import type { ErrorResponse } from '@apollo/client/link/error'

import { onError }            from '@apollo/client/link/error'

export const getApolloErrorLink = (): ApolloLink => {
  const errorLink = onError((errorResponse) => {
    const extendedErrorResponse = errorResponse as unknown as ErrorResponse & {
      cause?: Record<string, any>
    }
    const { graphQLErrors, cause } = extendedErrorResponse

    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        console.log(`[GraphQL error]: Message: ${message}`)
        console.log(`Location: ${locations}`)
        console.log(`Path: ${path}`)
        console.log(`Extenstions: ${extensions}`)
      })
    }
    if (cause) {
      const { message, extensions, locations, path } = cause
      console.log(`Cause: ${message}`)
      console.log(`Extenstions: ${extensions}`)
      console.log(`Locatoins: ${locations}`)
      console.log(`Path: ${path}`)
    }
  })

  return errorLink
}
