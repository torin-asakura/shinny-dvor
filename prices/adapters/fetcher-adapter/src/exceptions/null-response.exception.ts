import { FetcherAdapterExceptionMessage } from './exceptions.constants.js'

export class NullResponseError extends Error {
  constructor(url: string) {
    super(`${FetcherAdapterExceptionMessage.RESPONSE_IS_NULL}, on ${url}`)
  }
}
