import * as services from '../services/index.js'

import { Module }    from '@nestjs/common'

@Module({})
export class TgsnakeAdapterModule {
  // TODO provide tgsnake config options
  static register() {
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
