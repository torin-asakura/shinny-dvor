import type { Provider }         from '@nestjs/common'

import { GraphqlClientPort }     from '@graphql-client/application-module'

import { GraphqlClientPortImpl } from '../ports/index.js'

export const graphqlClientProviders: Array<Provider> = [
  {
    provide: GraphqlClientPort,
    useClass: GraphqlClientPortImpl,
  },
]
