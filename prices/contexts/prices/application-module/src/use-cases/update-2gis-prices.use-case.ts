import { Injectable }              from '@nestjs/common'

import { PutObjectToS3Service }    from '@prices/storage-adapter-module'

import { GetQueryDataService }     from '../services/index.js'
import { Get2gisPricesXmlService } from '../services/index.js'
import { getDateString }           from '../getters/index.js'

@Injectable()
export class Update2gisPricesUseCase {
  constructor(
    private readonly getQueryDataService: GetQueryDataService,
    private readonly get2gisPricesXmlService: Get2gisPricesXmlService,
    private readonly putObjectToS3Service: PutObjectToS3Service
  ) {}

  async execute(): Promise<void> {
    const queryData = await this.getQueryDataService.process()
    const twoGisXml = await this.get2gisPricesXmlService.process(queryData)

    const dateString = getDateString()

    await this.putObjectToS3Service.process(`two-gis-prices-${dateString}.xml`, twoGisXml)
    await this.putObjectToS3Service.process(`two-gis-prices-latest.xml`, twoGisXml)
  }
}
