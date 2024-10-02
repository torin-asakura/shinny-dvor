import type { AppointmentConversationDataType }     from './appointment-conversation.interfaces.js'

import { Injectable }                               from '@nestjs/common'

import { TelegramClientPort }                       from '../../ports/index.js'
import { AppointmentGetCommentaryConversationPart } from './conversation-parts/index.js'
import { AppointmentGetDateConversationPart }       from './conversation-parts/index.js'
import { AppointmentGetRadiiConversationPart }      from './conversation-parts/index.js'
import { AppointmentGetServiceConversationPart }    from './conversation-parts/index.js'
import { AppointmentGetTimeSlotConversationPart }   from './conversation-parts/index.js'
import { AppointmentGetCarBodyConversationPart }    from './conversation-parts/index.js'
import { AppointmentGetApprovalConversationPart }   from './conversation-parts/index.js'
import { ruLocale }                                 from '../../locals/index.js'

@Injectable()
export class AppointmentConversationService {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly appointmentGetDateConversationPart: AppointmentGetDateConversationPart,
    private readonly appointmentGetTimeSlotConversationPart: AppointmentGetTimeSlotConversationPart,
    private readonly appointmentGetCarBodyConversationPart: AppointmentGetCarBodyConversationPart,
    private readonly appointmentGetRadiiConversationPart: AppointmentGetRadiiConversationPart,
    private readonly appointmentGetServicesConversationPart: AppointmentGetServiceConversationPart,
    private readonly appointmentGetCommentaryConversationPart: AppointmentGetCommentaryConversationPart,
    private readonly appointmentGetApprovalConversationPart: AppointmentGetApprovalConversationPart
  ) {}

  // TODO it is must be formatted-telegram-bot-context, cause context layer
  async process(ctx) {
    try {
      await this.telegramClient.sendMessage(
        ctx,
        // TODO start appointment-conversation-message
        ruLocale.appointmentConversation.startConversationMessage
      )

      // TODO get-conversation
      // TODO what is conversation?
      const appointmentConversation: {
        data: AppointmentConversationDataType
      } = await this.telegramClient.createConversation(ctx)

      await this.appointmentGetDateConversationPart.process(ctx, appointmentConversation)
      const selectedDateMs = appointmentConversation.data.date.milliseconds

      await this.appointmentGetTimeSlotConversationPart.process(ctx, appointmentConversation, {
        questionData: selectedDateMs,
      })

      await this.appointmentGetCarBodyConversationPart.process(ctx, appointmentConversation)
      await this.appointmentGetRadiiConversationPart.process(ctx, appointmentConversation)
      await this.appointmentGetServicesConversationPart.process(ctx, appointmentConversation)

      await this.appointmentGetCommentaryConversationPart.process(ctx, appointmentConversation)
      //
      await this.appointmentGetApprovalConversationPart.process(ctx, appointmentConversation, {
        questionData: appointmentConversation.data,
      })

      //   // TODO write to DB - appointmentConversation.data
      //   // TODO write with telegram-client-data (phone - if available, userId )

      await this.telegramClient.sendMessage(
        ctx,
        ruLocale.appointmentConversation.endConversatoinMessage
      )

      this.telegramClient.removeConversation(ctx)
    } catch (error) {
      console.error(error)
      const { serverErrorMessage } = ruLocale.appointmentConversation
      await this.telegramClient.sendMessage(ctx, serverErrorMessage)
    }
  }
}
