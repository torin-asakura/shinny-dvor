import type { DynamicModule }            from '@nestjs/common'

import { Module }                        from '@nestjs/common'

import { PricesApplicationModule }       from '@prices/prices-application-module'
import { StorageAdapterModule }          from '@prices/storage-adapter-module'
import { UndiciAdapterModule }           from '@prices/undici-adapter-module'

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
        PricesApplicationModule.register(),
        UndiciAdapterModule.register(),
        StorageAdapterModule.register(),
      ],
    }
  }
}
