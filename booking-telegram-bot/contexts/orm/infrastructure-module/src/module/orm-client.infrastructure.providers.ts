import type { Provider } from '@nestjs/common'

import { OrmPort }       from '@orm-client/application-module'

import { OrmPortimpl }   from '../ports/index.js'

const ormProviders: Array<Provider> = [
  {
    provide: OrmPort,
    useClass: OrmPortimpl,
  },
]

export { ormProviders }
