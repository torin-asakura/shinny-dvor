import { Injectable }     from '@nestjs/common'

import { Snake }          from 'tgsnake'

import { TGSHAKE_CONFIG } from '../config/index.js'

// TODO all text to locales
// check migration bot maybe

@Injectable()
export class TgsnakeAdapterService extends Snake {
  constructor() {
    super(TGSHAKE_CONFIG)
    this.run()
  }

  async listenMessage() {
    // TODO interfaces
    const reply = async (ctx, text) => {
      return ctx.message.reply(text)
    }

    this.cmd('start', async (ctx) => {
      reply(ctx, 'command start')
    })

    this.cmd('help', async (ctx) => {
      reply(ctx, 'command help')
    })

    this.on('msg.text', (ctx) => {
      return reply(ctx, 'message received')
    })
  }
}
