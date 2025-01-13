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
        console.debug(`[GraphQL error]: Message: ${message}`)
        console.debug(`Location:`, locations)
        console.debug(`Path:`, path)
        console.debug(`Extenstions:`, extensions)
      })
    }
    if (cause) {
      const { message, extensions, locations, path } = cause
      console.debug(`Cause: ${message}`)
      console.debug(`Extenstions: ${extensions}`)
      console.debug(`Locatoins: ${locations}`)
      console.debug(`Path: ${path}`)
    }
  })

  return errorLink
}
