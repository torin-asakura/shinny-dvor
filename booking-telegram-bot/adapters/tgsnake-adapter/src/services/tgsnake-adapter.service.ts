import { Injectable }     from '@nestjs/common'
import { Snake }          from 'tgsnake'

import { TGSHAKE_CONFIG } from '../config/index.js'

@Injectable()
class TgsnakeAdapterService extends Snake {
  constructor() {
    super(TGSHAKE_CONFIG)
    this.run()
  }
}

export { TgsnakeAdapterService }
