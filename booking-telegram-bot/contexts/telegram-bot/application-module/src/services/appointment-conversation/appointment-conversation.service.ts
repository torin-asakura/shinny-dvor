import type { TelegramBotFormattedContextType }     from '@telegram-bot/application-module'

import { Injectable }                               from '@nestjs/common'

import { WriteAppointmentDataUseCase }              from '@orm-client/application-module'

import { TelegramClientPort }                       from '../../ports/index.js'
import { TIME_SLOT_STEP_MS }                        from './appointment-conversation.constants.js'
import { AppointmentGetCommentaryConversationPart } from './conversation-q-a-pairs/index.js'
import { AppointmentGetDateConversationPart }       from './conversation-q-a-pairs/index.js'
import { AppointmentGetRadiiConversationPart }      from './conversation-q-a-pairs/index.js'
import { AppointmentGetServiceConversationPart }    from './conversation-q-a-pairs/index.js'
import { AppointmentGetTimeSlotConversationPart }   from './conversation-q-a-pairs/index.js'
import { AppointmentGetCarBodyConversationPart }    from './conversation-q-a-pairs/index.js'
import { AppointmentGetApprovalConversationPart }   from './conversation-q-a-pairs/index.js'
import { ruLocale }                                 from '../../locals/index.js'

// TODO to interfaces
type AppointmentDataType = {
  telegramUserId: bigint
  telegramFullName: string
  timeSlotStart: bigint
  timeSlotEnd: bigint
  isApproved?: boolean
  carBody: string
  radii: string
  service: string
  commentary?: string
}

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
      // TODO to helpers
      const getFormattedAppointmentData = (
        rawAppointmentData: Record<string, any>,
        telegramUserId: bigint,
        telegramFullName: string
      ): AppointmentDataType => ({
        telegramUserId,
        telegramFullName,
        timeSlotStart: BigInt(rawAppointmentData.timeSlot.milliseconds as number),
        timeSlotEnd: BigInt(Number(rawAppointmentData.timeSlot.milliseconds) + TIME_SLOT_STEP_MS),
        carBody: rawAppointmentData.carBody,
        radii: rawAppointmentData.radii,
        service: rawAppointmentData.service,
        commentary: rawAppointmentData.commentary,
      })

      const getUserFullName = (firstName: string, lastname?: string): string => {
        let output = ''
        output += firstName
        if (lastname) output += ` ${lastname}`
        return output
      }

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

      // TODO get telegram phone - optional
      const userFullName = getUserFullName(ctx.userFirstName, ctx.userLastName)

      const formattedConversationData = getFormattedAppointmentData(
        appointmentConversation.data,
        ctx.userId,
        userFullName
      )

      await this.writeAppointmentDataUseCase.process(formattedConversationData)

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
