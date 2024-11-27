import type { OnModuleInit }         from '@nestjs/common'

import { Logger }                    from '@atls/logger'
import { Injectable }                from '@nestjs/common'
import { GetYandexPricesXmlUseCase } from '@prices/prices-application-module'
import { Get2gisPricesXmlUseCase }   from '@prices/prices-application-module'
import { GetQueryDataUseCase }       from '@prices/prices-application-module'
import { PutObjectToS3UseCase }      from '@prices/prices-application-module'

import { getCronTask }               from '../getters/index.js'

@Injectable()
export class PricesProcessor implements OnModuleInit {
  constructor(
    private readonly getYandexPricesXmlUseCase: GetYandexPricesXmlUseCase,
    private readonly get2gisPricesXmlUseCase: Get2gisPricesXmlUseCase,
    private readonly getQueryDataUseCase: GetQueryDataUseCase,
    private readonly putObjectToS3UseCase: PutObjectToS3UseCase
  ) {}

  async onModuleInit(): Promise<void> {
    const logger = new Logger('Bootstrap')

    await this.updatePricesData()
    const cronTask = getCronTask(logger, this.updatePricesData)
    cronTask.start()
  }

  private async updatePricesData(): Promise<void> {
    const queryData = await this.getQueryDataUseCase.execute()

    const yandexXml = await this.getYandexPricesXmlUseCase.execute(queryData)
    const twoGisXml = await this.get2gisPricesXmlUseCase.execute(queryData)

    const dateString = new Date().toISOString()

    await this.putObjectToS3UseCase.execute(`prices-${dateString}.xml`, yandexXml)
    await this.putObjectToS3UseCase.execute(`prices-latest.xml`, yandexXml)
    await this.putObjectToS3UseCase.execute(`two-gis-prices-${dateString}.xml`, twoGisXml)
    await this.putObjectToS3UseCase.execute(`two-gis-prices-latest.xml`, twoGisXml)
  }
}
