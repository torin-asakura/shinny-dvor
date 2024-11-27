import { PutObjectCommand }   from '@aws-sdk/client-s3'
import { Injectable }         from '@nestjs/common'

import { PutObjectToS3Error } from '../errors/index.js'
import { S3AdapterService }   from './s3-adapter.service.js'

@Injectable()
export class PutObjectToS3Service {
  constructor(private readonly s3AdapterService: S3AdapterService) {}

  async process(key: string, xml: string): Promise<void> {
    try {
      await this.s3AdapterService.send(
        new PutObjectCommand({
          Bucket: process.env.BUCKET_NAME || '',
          Key: key,
          Body: xml,
        })
      )
    } catch (e) {
      console.error(e)
      throw new PutObjectToS3Error(key)
    }
  }
}
