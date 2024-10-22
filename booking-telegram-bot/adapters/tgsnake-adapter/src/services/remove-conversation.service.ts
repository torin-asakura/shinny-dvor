import { Injectable }            from '@nestjs/common'

import { TgsnakeAdapterService } from './index.js'

@Injectable()
class RemoveConversationService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(chatId: bigint): void {
    this.tgsnakeAdapterService.conversation.remove(chatId)
  }
}

export { RemoveConversationService }
