import { Injectable }           from '@nestjs/common'
import { PutObjectToS3Service } from '@prices/storage-adapter-module'

@Injectable()
export class PutObjectToS3UseCase {
  constructor(private readonly putObjectToS3Service: PutObjectToS3Service) {}

  async execute(key: string, xml: string): Promise<void> {
    return this.putObjectToS3Service.process(key, xml)
  }
}
