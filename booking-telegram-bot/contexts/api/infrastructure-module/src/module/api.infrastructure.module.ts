import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as allControllers    from '../controllers/index.js'

@Module({})
export class ApiInfrastructureModule {
  static register(): DynamicModule {
    const controllerProviders = Object.values(allControllers)

    const controllers = [...controllerProviders]

    return {
      global: true,
      module: ApiInfrastructureModule,
      controllers,
    }
  }
}
