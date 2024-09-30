import type { AppointmentConversationDataType }     from './appointment-conversation.interfaces.js'

import { Injectable }                               from '@nestjs/common'
// TODO for what?
import { Logger }                                   from '@nestjs/common'

// TODO change import to sub-paths
import { TelegramClientPort }                       from '../../ports/index.js'
// TODO change import to sub-paths
import { AppointmentGetCommentaryConversationPart } from './conversation-parts/index.js'
import { AppointmentGetDateConversationPart }       from './conversation-parts/index.js'
import { AppointmentGetRadiiConversationPart }      from './conversation-parts/index.js'
import { AppointmentGetServiceConversationPart }    from './conversation-parts/index.js'
import { AppointmentGetTimeSlotConversationPart }   from './conversation-parts/index.js'
import { AppointmentGetCarBodyConversationPart }    from './conversation-parts/index.js'
import { AppointmentGetApprovalConversationPart }   from './conversation-parts/index.js'
// TODO change import to sub-path
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

  // TODO inteface
  async process(ctx: any) {
    try {
      // TODO type
      // const appointmentData: Record<string, any> = {}
      await this.telegramClient.sendMessage(
        ctx,
        ruLocale.appointmentConversation.startConversationMessage
      )

      const appointmentConversation: {
        data: AppointmentConversationDataType
      } = await this.telegramClient.createConversation(ctx)

      appointmentConversation.data = {}

      await this.appointmentGetDateConversationPart.process(ctx, appointmentConversation)

      const selectedDateMs = appointmentConversation.data.date.milliseconds
      await this.appointmentGetTimeSlotConversationPart.process(ctx, appointmentConversation, {
        questionData: selectedDateMs,
      })

      await this.appointmentGetCarBodyConversationPart.process(ctx, appointmentConversation)
      await this.appointmentGetRadiiConversationPart.process(ctx, appointmentConversation)
      await this.appointmentGetServicesConversationPart.process(ctx, appointmentConversation)

      await this.appointmentGetCommentaryConversationPart.process(ctx, appointmentConversation)

      await this.appointmentGetApprovalConversationPart.process(ctx, appointmentConversation, {
        questionData: appointmentConversation.data,
      })

      // TODO Q: name? - save it from context
      // TODO Q: phone? - есть кнопка в telegram api - типо поделиться контактом - сделать опциональной
      // TODO запись в бд

      await this.telegramClient.sendMessage(
        ctx,
        ruLocale.appointmentConversation.endConversatoinMessage
      )

      this.telegramClient.removeConversation(ctx)
    } catch (error) {
      // TODO что за класс Logger
      // если он пишет логи, то в случае ошибок нужно использовать его
      console.error(error)

      // TODO maybe more details on error???
      // - но зачем это знать клиенту?
      await this.telegramClient.sendMessage(ctx, 'На сервере произошла ошибка')
    }
  }
}
