import type { Provider }       from '@nestjs/common'

import { QueryClientPort }     from '@query-client/application-module'

import { QueryClientPortImpl } from '../ports/index.js'

export const graphqlClientProviders: Array<Provider> = [
  {
    provide: QueryClientPort,
    useClass: QueryClientPortImpl,
  },
]
