import * as services          from '../services/index.js'
import * as useCases          from '../use-cases/index.js'

import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'
import { ClientsModule }      from '@nestjs/microservices'
import { Transport }          from '@nestjs/microservices'

@Module({})
class TelegramBotApplicationModule {
  static register(): DynamicModule {
    const useCaseProviders = Object.values(useCases)
    const serviceProviders = Object.values(services)

    const providers = [...useCaseProviders, ...serviceProviders]
    const exports = [...useCaseProviders]

    return {
      global: true,
      module: TelegramBotApplicationModule,
      imports: [
        ClientsModule.register([
          {
            name: 'OPERATOR_BOT_SERVICE',
            transport: Transport.TCP,
            options: {
              host: process.env.OPERATOR_BOT_HOST || 'operator-bot',
              port: Number(process.env.OPERATOR_BOT_PORT) || 3000,
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
