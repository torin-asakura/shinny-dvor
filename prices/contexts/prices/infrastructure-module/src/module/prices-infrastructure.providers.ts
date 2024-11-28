import type { Provider }       from '@nestjs/common'

import { FetchClientPort }     from '@prices/prices-application-module'
import { StoragePort }         from '@prices/prices-application-module'

import * as processors         from '../processors/index.js'
import { FetchClientPortImpl } from '../ports/index.js'
import { StoragePortImpl }     from '../ports/index.js'

export const pricesInfrastructureProviders: Array<Provider> = [
  {
    provide: FetchClientPort,
    useClass: FetchClientPortImpl,
  },
  {
    provide: StoragePort,
    useClass: StoragePortImpl,
  },
  ...Object.values(processors),
]
