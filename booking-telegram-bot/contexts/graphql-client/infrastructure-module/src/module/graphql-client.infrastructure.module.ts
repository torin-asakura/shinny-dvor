import type { DynamicModule }             from '@nestjs/common'

import { GraphqlClientApplicationModule } from '@graphql-client/application-module'
import { Module }                         from '@nestjs/common'

import { graphqlClientProviders }         from './graphql-client.infrastructure.providers.js'

@Module({})
export class GraphqlClientInfrastructureModule {
  static register(): DynamicModule {
    const providers = graphqlClientProviders

    return {
      global: true,
      module: GraphqlClientInfrastructureModule,
      providers: [...providers],
      exports: [...providers],
      imports: [GraphqlClientApplicationModule.register()],
    }
  }
}
