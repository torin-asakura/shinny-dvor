import type { DynamicModule }            from '@nestjs/common'

import { Module }                        from '@nestjs/common'
import { ScheduleModule }                from '@nestjs/schedule'

import { FetcherAdapterModule }          from '@prices/fetcher-adapter-module'
import { PricesApplicationModule }       from '@prices/prices-application-module'
import { StorageAdapterModule }          from '@prices/storage-adapter-module'

import { pricesInfrastructureProviders } from './prices-infrastructure.providers.js'

@Module({})
export class PricesInfrastructureModule {
  static register(): DynamicModule {
    const providers = pricesInfrastructureProviders

    return {
      global: true,
      module: PricesInfrastructureModule,
      providers: [...providers],
      exports: [...providers],
      imports: [
        ScheduleModule.forRoot(),
        PricesApplicationModule.register(),
        FetcherAdapterModule.register(),
        StorageAdapterModule.register(),
      ],
    }
  }
}
