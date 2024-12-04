import * as allControllers      from '../controllers/index.js'
import * as listeners           from '../listeners/index.js'

import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import { ApiApplicationModule } from '@booking-telegram-bot/api-application-module'

@Module({})
export class ApiInfrastructureModule {
  static register(): DynamicModule {
    const controllerProviders = Object.values(allControllers)
    const listenerProviders = Object.values(listeners)

    const controllers = [...controllerProviders, ...listenerProviders]

    return {
      global: true,
      module: ApiInfrastructureModule,
      // providers: [...listenerProviders],
      // exports: [...listenerProviders],
      controllers,
      imports: [ApiApplicationModule.register()],
    }
  }
}
