import type { DynamicModule }           from '@nestjs/common'

import { Module }                       from '@nestjs/common'
import { ClientsModule }                from '@nestjs/microservices'
import { Transport }                    from '@nestjs/microservices'

import { FetcherAdapterModule }         from '@operator-bot/fetcher-adapter-module'
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
        ClientsModule.register([
          {
            name: 'BOOKING_TELEGRAM_BOT_SERVICE',
            transport: Transport.TCP,
            options: {
              host: process.env.BOOKING_TELEGRAM_BOT_HOST || 'booking-telegram-bot',
              port: Number(process.env.BOOKING_TELEGRAM_BOT_PORT) || 3000,
            },
          },
        ]),
        I18nAdapterModule.register(),
        TgsnakeAdapterModule.register(),
        FetcherAdapterModule.register(),
        TelegramBotApplicationModule.register(),
      ],
    }
  }
}
