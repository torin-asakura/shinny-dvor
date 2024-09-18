import { Module }        from '@nestjs/common'

import { TgsnakeModule } from './tgsnake.module.js'

@Module({})
export class TgsnakeAdapterModule {
  static register() {
    return {
      global: true,
      // providers: [TestService, ...tgsnakeProviders],
      module: TgsnakeAdapterModule,
      imports: [TgsnakeModule.forRoot()],
    }
  }
}
