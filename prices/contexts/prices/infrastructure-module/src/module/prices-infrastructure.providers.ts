import type { Provider }       from '@nestjs/common'

import { QueryClientPort }     from '@prices/prices-application-module'
import { StoragePort }         from '@prices/prices-application-module'

import * as processors         from '../processors/index.js'
import { QueryClientPortImpl } from '../ports/index.js'
import { StoragePortImpl }     from '../ports/index.js'

export const pricesInfrastructureProviders: Array<Provider> = [
  {
    provide: QueryClientPort,
    useClass: QueryClientPortImpl,
  },
  {
    provide: StoragePort,
    useClass: StoragePortImpl,
  },
  ...Object.values(processors),
]
