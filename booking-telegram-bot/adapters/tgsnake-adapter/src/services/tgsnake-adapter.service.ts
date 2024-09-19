import { Injectable }     from '@nestjs/common'

import { Snake }          from 'tgsnake'

import { TGSHAKE_CONFIG } from '../config/index.js'

@Injectable()
export class TgsnakeAdapterService extends Snake {
  constructor() {
    super(TGSHAKE_CONFIG)
    this.run()
  }

  async listenMessage() {
    this.on('msg.text', (update) => {
      return update.msg?.reply('I hear You!')
    })
  }
}
