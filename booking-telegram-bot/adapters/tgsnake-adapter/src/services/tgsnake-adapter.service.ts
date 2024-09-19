import { Injectable }     from '@nestjs/common'

import { Snake }          from 'tgsnake'

import { TGSHAKE_CONFIG } from '../config/index.js'

@Injectable()
export class TgsnakeAdapterService {
  // constructor(@Inject(FFMPEG_ADAPTER_OPTIONS) private readonly options: FfmpegAdapterOptions) {
  constructor() {
    this.client = new Snake(TGSHAKE_CONFIG)
    this.client.run()
  }

  async listenMessage() {
    this.client.on('msg.text', (update) => {
      return update.msg?.reply('I hear You!')
    })
  }
}
