import { Injectable } from '@nestjs/common'

@Injectable()
export class PartA0Service {
  static async process(client) {
    client.on('msg.text', (update) => {
      return update.msg?.reply('I hear You!')
    })
  }
}
