import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as useCases          from '../use-cases/index.js'

@Module({})
class OrmClientApplicationModule {
  static register(): DynamicModule {
    const useCaseProviders = Object.values(useCases)

    const providers = [...useCaseProviders]
    const exports = [...useCaseProviders]

    return {
      global: true,
      module: OrmClientApplicationModule,
      providers,
      exports,
    }
  }
}

export { OrmClientApplicationModule }
