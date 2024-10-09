import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import { OrmApplicationModule } from '@orm-client/application-module'

import { ormProviders }         from './orm-client.infrastructure.providers.js'

@Module({})
class OrmInfrastructureModule {
  static register(): DynamicModule {
    const providers = ormProviders

    return {
      global: true,
      module: OrmInfrastructureModule,
      providers: [...providers],
      exports: [...providers],
      imports: [OrmApplicationModule.register()],
    }
  }
}

export { OrmInfrastructureModule }
