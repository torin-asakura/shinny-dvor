import type { DynamicModule }           from '@nestjs/common'

import { Module }                       from '@nestjs/common'

import { I18nAdapterModule }            from '@booking-telegram-bot/i18n-adapter'
import { MikroOrmAdapterModule }        from '@booking-telegram-bot/mikro-orm-adapter'
import { TgsnakeAdapterModule }         from '@booking-telegram-bot/tgsnake-adapter'
import { TelegramBotApplicationModule } from '@telegram-bot/application-module'

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
        MikroOrmAdapterModule.register(),
        TgsnakeAdapterModule.register(),
        TelegramBotApplicationModule.register(),
      ],
    }
  }
}
