import { S3Client }   from '@aws-sdk/client-s3'
import { Injectable } from '@nestjs/common'

@Injectable()
export class S3AdapterService extends S3Client {
  constructor() {
    super({
      endpoint: process.env.FILES_STORAGE_HOST,
      region: process.env.FILES_STORAGE_REGION,
      credentials: {
        accessKeyId: process.env.YC_SA_KEY_ID || '',
        secretAccessKey: process.env.YC_SA_SECRET_KEY || '',
      },
    })
  }
}
