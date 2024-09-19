import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'
import { TelegramBotApplicationModule } from '@telegram-bot/application-module'

import { telegramBotProviders } from './telegram-bot.infrastructure.providers.js'

@Module({})
export class TelegramBotInfrastructureModule {
  static registerAsync(): DynamicModule {
    const providers = telegramBotProviders

    return {
      global: true,
      module: TelegramBotInfrastructureModule,
      providers: [...providers],
      exports: [...providers],
      imports: [TelegramBotApplicationModule.register()]
    }
  }
}
