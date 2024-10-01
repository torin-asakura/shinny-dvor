import type { DynamicModule }           from '@nestjs/common'

import { Module }                       from '@nestjs/common'
import { QueryClientApplicationModule } from '@query-client/application-module'

import { graphqlClientProviders }       from './query-client.infrastructure.providers.js'

@Module({})
export class QueryClientInfrastructureModule {
  static register(): DynamicModule {
    const providers = graphqlClientProviders

    return {
      global: true,
      module: QueryClientInfrastructureModule,
      providers: [...providers],
      exports: [...providers],
      imports: [QueryClientApplicationModule.register()],
    }
  }
}
