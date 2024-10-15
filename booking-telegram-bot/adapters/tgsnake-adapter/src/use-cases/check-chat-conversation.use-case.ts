import { Injectable }            from '@nestjs/common'

import { TgsnakeAdapterService } from '../services/index.js'

@Injectable()
class CheckChatConversationUseCase {
  // TODO можно ли вынести конструктор в имплементацию (класс-родитель), чтобы не дублировать еге инициализацию
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(chatId: bigint): boolean {
    const { conversation } = this.tgsnakeAdapterService.conversation as unknown as {
      conversation: Map<bigint, any>
    }

    if (conversation.get(chatId)) {
      return true
    }
    return false
  }
}

export { CheckChatConversationUseCase }
