import * as processors         from '../processors/index.js'

import type { Provider }       from '@nestjs/common'

import { QueryClientPort }     from '@prices/prices-application-module'

import { QueryClientPortImpl } from '../ports/query-client.port.js'

export const pricesInfrastructureProviders: Array<Provider> = [
  {
    provide: QueryClientPort,
    useClass: QueryClientPortImpl,
  },
  ...Object.values(processors),
]
