import type { DynamicModule }    from '@nestjs/common'

import { Module }                from '@nestjs/common'

import { MikroOrmAdapterModule } from '@booking-telegram-bot/mikro-orm-adapter'

import { ormProviders }          from './orm-client.infrastructure.providers.js'

@Module({})
class OrmClientInfrastructureModule {
  static register(): DynamicModule {
    const providers = ormProviders

    return {
      global: true,
      module: OrmClientInfrastructureModule,
      providers: [...providers],
      exports: [...providers],
      imports: [MikroOrmAdapterModule.register()],
    }
  }
}

export { OrmClientInfrastructureModule }
