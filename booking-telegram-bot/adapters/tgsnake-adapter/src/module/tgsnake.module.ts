import { Module }           from '@nestjs/common'

import { tgsnakeProviders } from '../providers/tgsnake.provider.js'

@Module({})
export class TgsnakeModule {
  static forRoot() {
    return {
      global: true,
      module: TgsnakeModule,
      providers: tgsnakeProviders,
      exports: tgsnakeProviders,
    }
  }
}
