import { Injectable }                from '@nestjs/common'

import { PutObjectToS3Service }      from '@prices/storage-adapter-module'

import { GetQueryDataService }       from '../services/index.js'
import { GetYandexPricesXmlService } from '../services/index.js'
import { getDateString }             from '../getters/index.js'

@Injectable()
export class UpdateYandexPricesUseCase {
  constructor(
    private readonly getQueryDataService: GetQueryDataService,
    private readonly getYandexPricesXmlService: GetYandexPricesXmlService,
    private readonly putObjectToS3Service: PutObjectToS3Service
  ) {}

  async execute(): Promise<void> {
    const queryData = await this.getQueryDataService.process()
    const yandexXml = await this.getYandexPricesXmlService.process(queryData)

    const dateString = getDateString()

    await this.putObjectToS3Service.process(`prices-${dateString}.xml`, yandexXml)
    await this.putObjectToS3Service.process(`prices-latest.xml`, yandexXml)
  }
}
