import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import { telegramBotProviders } from './telegram-bot.infrastructure.providers.js'

@Module({})
export class TelegramBotInfrastructureModule {
  static registerAsync() {
    const providers = telegramBotProviders

    return {
      global: true,
      module: TelegramBotInfrastructureModule,
      providers: [...providers],
      export: [...providers],
    }
  }
}
