import type { OnModuleInit }         from '@nestjs/common'

import { Injectable }                from '@nestjs/common'
import { GetYandexPricesXmlUseCase } from '@prices/prices-application-module'
import { Get2gisPricesXmlUseCase }   from '@prices/prices-application-module'
import { GetQueryDataUseCase }       from '@prices/prices-application-module'

@Injectable()
export class PricesProcessor implements OnModuleInit {
  constructor(
    private readonly getYandexPricesXmlUseCase: GetYandexPricesXmlUseCase,
    private readonly get2gisPricesXmlUseCase: Get2gisPricesXmlUseCase,
    private readonly getQueryDataUseCase: GetQueryDataUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.updatePricesData()
  }

  private async updatePricesData() {
    const queryData = await this.getQueryDataUseCase.execute()

    const yandexXml = await this.getYandexPricesXmlUseCase.execute(queryData)
    const twoGisXml = await this.get2gisPricesXmlUseCase.execute(queryData)
  }
}
