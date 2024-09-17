import { Module }           from '@nestjs/common'

import { TestService }      from '../services/index.js'
import { tgsnakeProviders } from '../providers/tgsnake.providers.js'

@Module({})
export class TelegramAdapterModule {
  static register() {
    return {
      global: true,
      providers: [TestService, ...tgsnakeProviders],
      module: TelegramAdapterModule,
    }
  }
}
