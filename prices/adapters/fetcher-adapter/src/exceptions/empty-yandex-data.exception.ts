import { FetcherAdapterExceptionMessage } from './exceptions.constants.js'

export class EmptyYandexDataError extends Error {
  constructor() {
    super(FetcherAdapterExceptionMessage.DOCUMENT_IS_EMPTY)
  }
}
