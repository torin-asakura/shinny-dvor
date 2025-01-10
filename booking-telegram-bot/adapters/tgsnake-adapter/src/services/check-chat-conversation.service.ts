import { Injectable }            from '@nestjs/common'

import { TgsnakeAdapterService } from './index.js'

@Injectable()
class CheckChatConversationService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(chatId: bigint): boolean {
    const { conversation } = this.tgsnakeAdapterService.conversation as unknown as {
      conversation: Map<bigint, object>
    }

    if (conversation.get(chatId)) {
      return true
    }
    return false
  }
}

export { CheckChatConversationService }
