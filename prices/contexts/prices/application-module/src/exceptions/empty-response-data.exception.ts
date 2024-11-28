import { ApplicationExceptionMessage } from './exceptions.constants.js'

export class EmptyResponseDataError extends Error {
  constructor() {
    super(ApplicationExceptionMessage.RESPONSE_IS_NULL)
  }
}
