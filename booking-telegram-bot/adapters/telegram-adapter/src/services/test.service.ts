import { Inject }     from '@nestjs/common'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
  constructor(
    @Inject('TGSNAKE_CLIENT')
    private client
  ) {}

  async message() {
    this.client.on('msg.text', (update) => {
      return update.msg?.reply('I hear You!')
    })
  }
}
