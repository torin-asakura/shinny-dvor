import { Injectable }            from '@nestjs/common'

import { TgsnakeAdapterService } from '../services/index.js'

@Injectable()
class RemoveConversationUseCase {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(chatId: bigint): void {
    this.tgsnakeAdapterService.conversation.remove(chatId)
  }
}

export { RemoveConversationUseCase }
