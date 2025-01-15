import { Injectable }           from '@nestjs/common'

import { StoragePort }          from '@prices/prices-application-module'
import { PutObjectToS3Service } from '@prices/storage-adapter-module'

@Injectable()
export class StoragePortImpl implements StoragePort {
  constructor(private readonly putObjectToS3Service: PutObjectToS3Service) {}

  async putObjectToS3(key: string, xml: string): Promise<void> {
    return this.putObjectToS3Service.process(key, xml)
  }
}
