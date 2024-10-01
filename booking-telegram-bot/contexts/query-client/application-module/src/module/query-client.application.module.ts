import * as useCases          from '../use-cases/index.js'

import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

@Module({})
export class QueryClientApplicationModule {
  static register(): DynamicModule {
    const useCaseProviders = Object.values(useCases)

    const providers = [...useCaseProviders]
    const exports = [...useCaseProviders]

    return {
      global: true,
      module: QueryClientApplicationModule,
      providers,
      exports,
    }
  }
}
