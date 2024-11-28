import { OnModuleInit }              from '@nestjs/common'
import { Injectable }                from '@nestjs/common'
import { Cron }                      from '@nestjs/schedule'

import { Update2gisPricesUseCase }   from '@prices/prices-application-module'
import { UpdateYandexPricesUseCase } from '@prices/prices-application-module'

@Injectable()
export class PricesProcessor implements OnModuleInit {
  constructor(
    private readonly update2gisPricesUseCase: Update2gisPricesUseCase,
    private readonly updateYandexPricesUseCase: UpdateYandexPricesUseCase
  ) {}

  @Cron('0 0 * * 0')
  private async updatePricesData(): Promise<void> {
    await this.update2gisPricesUseCase.execute()
    await this.updateYandexPricesUseCase.execute()
  }

  async onModuleInit(): Promise<void> {
    await this.updatePricesData()
  }
}
