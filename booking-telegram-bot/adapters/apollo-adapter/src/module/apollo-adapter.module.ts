import * as services from '../services/index.js'

import { Module }    from '@nestjs/common'

@Module({})
export class ApolloAdapterModule {
  // TODO provide tgsnake config options
  static register() {
    const serviceProviders = Object.values(services)
    const providers = [...serviceProviders]

    return {
      global: true,
      module: ApolloAdapterModule,
      providers: [...providers],
      exports: [...providers],
    }
  }
}
