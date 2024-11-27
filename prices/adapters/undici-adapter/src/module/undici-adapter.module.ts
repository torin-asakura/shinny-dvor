import * as services          from '../services/index.js'

import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

@Module({})
export class UndiciAdapterModule {
  static register(): DynamicModule {
    const serviceProviders = Object.values(services)

    const providers = [...serviceProviders]
    const exports = [...serviceProviders]

    return {
      global: true,
      module: UndiciAdapterModule,
      providers,
      exports,
    }
  }
}
