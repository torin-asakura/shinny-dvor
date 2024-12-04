import * as allControllers      from '../controllers/index.js'

import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'
import { ClientsModule }        from '@nestjs/microservices'
import { Transport }            from '@nestjs/microservices'

import { ApiApplicationModule } from '@operator-bot/api-application-module'

@Module({})
export class ApiInfrastructureModule {
  static register(): DynamicModule {
    const controllerProviders = Object.values(allControllers)
    const controllers = [...controllerProviders]

    return {
      global: true,
      module: ApiInfrastructureModule,
      controllers,
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
        ApiApplicationModule.register(),
      ],
    }
  }
}
