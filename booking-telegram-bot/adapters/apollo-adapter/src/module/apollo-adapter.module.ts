import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as services          from '../services/index.js'
import * as useCases          from '../use-cases/index.js'

@Module({})
export class ApolloAdapterModule {
  static register(): DynamicModule {
    const serviceProviders = Object.values(services)
    const useCaseProviders = Object.values(useCases)

    const providers = [...serviceProviders, ...useCaseProviders]
    const exports = [...useCaseProviders]

    return {
      global: true,
      module: ApolloAdapterModule,
      providers,
      exports,
    }
  }
}
