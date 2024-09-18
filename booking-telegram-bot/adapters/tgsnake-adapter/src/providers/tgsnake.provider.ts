import { Snake }          from 'tgsnake'

import { TGSHAKE_CONFIG } from '../config/index.js'
import { PartA0Service }  from '../services/part-a0.service.js'

export const tgsnakeProviders = [
  {
    provide: 'TGSNAKE_CLIENT',
    useFactory: () => {
      const client = new Snake(TGSHAKE_CONFIG)
      client.run()
      PartA0Service.process(client)

      // return client
    },
  },
]
