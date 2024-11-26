import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

@Module({})
export class TelegramBotInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: TelegramBotInfrastructureModule,
      providers: [...providers],
      exports: [...providers],
      imports: [
        // adapters
      ],
    }
  }
}
