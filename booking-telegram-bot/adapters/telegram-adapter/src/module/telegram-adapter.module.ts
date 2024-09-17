import { Module }         from '@nestjs/common'

import { Snake }          from 'tgsnake'

import { TGSHAKE_CONFIG } from '../config/index.js'
import { TestService }    from '../services/index.js'

const client = new Snake(TGSHAKE_CONFIG)

@Module({})
export class TelegramAdapterModule {
  static register() {
    client.on('msg.text', (update) => {
      return update.msg?.reply('I hear You!')
    })

    client.run()

    return {
      global: true,
      providers: [TestService],
      module: TelegramAdapterModule,
    }
  }
}
