import { Injectable }           from '@nestjs/common'

import { ReceiveMessageService } from '../services/index.js'

@Injectable()
export class ReceiveMessageUseCase {
  constructor(private readonly receiveMessageService: ReceiveMessageService) {}

  // TODO interface
  async process(ctx: any) {
    await this.receiveMessageService.process(ctx)
  }
}
