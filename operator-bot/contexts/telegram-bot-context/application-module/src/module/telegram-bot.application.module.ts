import * as useCases          from '../use-cases/index.js'

import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'
import { ClientsModule }      from '@nestjs/microservices'
import { Transport }          from '@nestjs/microservices'

@Module({})
class TelegramBotApplicationModule {
  static register(): DynamicModule {
    const useCaseProviders = Object.values(useCases)

    const providers = [...useCaseProviders]
    const exports = [...useCaseProviders]

    return {
      global: true,
      module: TelegramBotApplicationModule,
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
      ],
      providers,
      exports,
    }
  }
}

export { TelegramBotApplicationModule }
