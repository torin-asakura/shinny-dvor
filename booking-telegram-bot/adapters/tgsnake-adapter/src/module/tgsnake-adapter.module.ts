import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as services          from '../services/index.js'

@Module({})
class TgsnakeAdapterModule {
  static register(): DynamicModule {
    const serviceProviders = Object.values(services)
    const providers = [...serviceProviders]

    return {
      global: true,
      module: TgsnakeAdapterModule,
      providers: [...providers],
      exports: [...providers],
    }
  }
}

export { TgsnakeAdapterModule }
