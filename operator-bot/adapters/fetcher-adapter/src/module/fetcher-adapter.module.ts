import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as services          from '../services/index.js'

@Module({})
export class FetcherAdapterModule {
  static register(): DynamicModule {
    const serviceProviders = Object.values(services)

    const providers = [...serviceProviders]
    const exports = [...serviceProviders]

    return {
      global: true,
      module: FetcherAdapterModule,
      providers,
      exports,
    }
  }
}
