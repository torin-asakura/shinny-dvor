import { StorageAdapterExceptionMessage } from './exceptions.constants.js'

export class PutObjectToS3Error extends Error {
  constructor(key: string) {
    super(`${StorageAdapterExceptionMessage.DOCUMENT_PUT_ERROR} ${key}`)
  }
}
