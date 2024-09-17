import { Snake }          from 'tgsnake'

import { TGSHAKE_CONFIG } from '../config/index.js'

const tgsnakeProviders = [
  {
    provide: 'TGSNAKE_CLIENT',
    useFactory: () => {
      const client = new Snake(TGSHAKE_CONFIG)
      client.run()

      client.on('msg.text', (update) => {
        return update.msg?.reply('I hear You!')
      })

      return client
    },
  },
]

export { tgsnakeProviders }
