import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as services          from '../services/index.js'
import * as useCases          from '../use-cases/index.js'

@Module({})
export class PricesApplicationModule {
  static register(): DynamicModule {
    const useCaseProviders = Object.values(useCases)
    const serviceProviders = Object.values(services)

    const providers = [...useCaseProviders, ...serviceProviders]
    const exports = [...useCaseProviders]

    return {
      global: true,
      module: PricesApplicationModule,
      providers,
      exports,
    }
  }
}
