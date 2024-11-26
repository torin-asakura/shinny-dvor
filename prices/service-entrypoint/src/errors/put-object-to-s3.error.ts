export class PutObjectToS3Error extends Error {
  constructor(key: string) {
    super(`error on put-object-to-s3, on ${key}`)
  }
}
