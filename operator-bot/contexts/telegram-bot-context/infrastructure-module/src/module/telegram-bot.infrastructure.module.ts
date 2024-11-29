import type { DynamicModule }           from '@nestjs/common'

import { Module }                       from '@nestjs/common'

import { I18nAdapterModule }            from '@operator-bot/i18n-adapter'
import { TelegramBotApplicationModule } from '@operator-bot/telegram-bot-application-module'
import { TgsnakeAdapterModule }         from '@operator-bot/tgsnake-adapter'

import { telegramBotProviders }         from './telegram-bot.infrastructure.providers.js'

@Module({})
export class TelegramBotInfrastructureModule {
  static register(): DynamicModule {
    const providers = telegramBotProviders

    return {
      global: true,
      module: TelegramBotInfrastructureModule,
      providers: [...providers],
      exports: [...providers],
      imports: [
        I18nAdapterModule.register(),
        TgsnakeAdapterModule.register(),
        TelegramBotApplicationModule.register(),
      ],
    }
  }
}
