import { Injectable }       from '@nestjs/common'

import { ConversationPart } from '../../conversation-part.class.js'

@Injectable()
export class AppointmentGetApprovalConversationPart extends ConversationPart {
  constructor(private readonly telegramClient: TelegramClientPort) {
    super()
  }

  async sendQuestion() {}
}
