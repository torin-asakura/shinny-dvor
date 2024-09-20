import { Module }    from '@nestjs/common'

import * as services from '../services/index.js'

@Module({})
export class TgsnakeAdapterModule {
  // TODO provide tgsnake config options
  static registerAsync() {
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
