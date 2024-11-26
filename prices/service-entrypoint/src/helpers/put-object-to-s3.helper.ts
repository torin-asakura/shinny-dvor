import type { Logger }        from '@atls/logger'
import type { S3Client }      from '@aws-sdk/client-s3'

import { PutObjectCommand }   from '@aws-sdk/client-s3'

import { PutObjectToS3Error } from '../errors/index.js'

type PutObjectToS3Props = {
  s3Client: S3Client
  xml: string
  key: string
  logger: Logger
}

export const putObjectToS3 = async ({ s3Client, xml, key, logger }: PutObjectToS3Props) => {
  try {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME || '',
        Key: key,
        Body: xml,
      })
    )

    logger.info(`${key} uploaded successfully.`)
  } catch (error) {
    throw new PutObjectToS3Error(key)
  }
}
