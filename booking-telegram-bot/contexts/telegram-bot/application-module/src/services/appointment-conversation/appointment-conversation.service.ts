import type { TelegramBotFormattedContextType }     from '@telegram-bot/application-module'

import { Injectable }                               from '@nestjs/common'

import { WriteAppointmentDataUseCase }              from '@orm-client/application-module'

import { TelegramClientPort }                       from '../../ports/index.js'
import { AppointmentGetCommentaryConversationPart } from './conversation-q-a-pairs/index.js'
import { AppointmentGetDateConversationPart }       from './conversation-q-a-pairs/index.js'
import { AppointmentGetRadiiConversationPart }      from './conversation-q-a-pairs/index.js'
import { AppointmentGetServiceConversationPart }    from './conversation-q-a-pairs/index.js'
import { AppointmentGetTimeSlotConversationPart }   from './conversation-q-a-pairs/index.js'
import { AppointmentGetCarBodyConversationPart }    from './conversation-q-a-pairs/index.js'
import { AppointmentGetApprovalConversationPart }   from './conversation-q-a-pairs/index.js'
import { ruLocale }                                 from '../../locals/index.js'

@Injectable()
export class AppointmentConversationService {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly writeAppointmentDataUseCase: WriteAppointmentDataUseCase,
    private readonly appointmentGetDateConversationPart: AppointmentGetDateConversationPart,
    private readonly appointmentGetTimeSlotConversationPart: AppointmentGetTimeSlotConversationPart,
    private readonly appointmentGetCarBodyConversationPart: AppointmentGetCarBodyConversationPart,
    private readonly appointmentGetRadiiConversationPart: AppointmentGetRadiiConversationPart,
    private readonly appointmentGetServicesConversationPart: AppointmentGetServiceConversationPart,
    private readonly appointmentGetCommentaryConversationPart: AppointmentGetCommentaryConversationPart,
    private readonly appointmentGetApprovalConversationPart: AppointmentGetApprovalConversationPart
  ) {}

  async process(ctx: TelegramBotFormattedContextType): Promise<void> {
    try {
      // const mockData = {
      //   date: { clientText: 'среда, 9 октября', milliseconds: 1728421200000 },
      //   timeSlot: { milliseconds: 1728462600000, text: '11:30', isFree: true },
      //   carBody: 'Джип',
      //   radii: 'R14',
      //   service: 'Хранение шин',
      //   commentary: 'Тест комментарий текст',
      //   undefined: true,
      // }

      await this.writeAppointmentDataUseCase.process()

      // TODO write mock data to db

      // TODO move write data func to bottom of conversation.service
      // TODO change mock data to real data
      // TODO test it

      await this.telegramClient.sendMessage(
        ctx,
        // TODO start appointment-conversation-message
        ruLocale.appointmentConversation.startConversationMessage
      )

      const appointmentConversation = this.telegramClient.createConversation(ctx)

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

      // TODO write to DB - appointmentConversation.data
      // TODO write with telegram-client-data (phone - if available, userId )

      await this.telegramClient.sendMessage(
        ctx,
        ruLocale.appointmentConversation.endConversatoinMessage
      )

      this.telegramClient.removeConversation(ctx.chatId)
    } catch (error) {
      // eslint-disable-next-line
      console.error(error)
      const { serverErrorMessage } = ruLocale.appointmentConversation
      await this.telegramClient.sendMessage(ctx, serverErrorMessage)
    }
  }
}
