import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as allControllers    from '../controllers/index.js'
import * as services          from '../services/index.js'

@Module({})
export class ApiInfrastructureModule {
  static register(): DynamicModule {
    const controllerProviders = Object.values(allControllers)
    const serviceProviders = Object.values(services)

    const controllers = [...controllerProviders]
    const providers = [...serviceProviders]

    return {
      global: true,
      module: ApiInfrastructureModule,
      controllers,
      providers,
    }
  }
}
