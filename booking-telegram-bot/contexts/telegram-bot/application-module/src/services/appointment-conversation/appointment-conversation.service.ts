/* eslint-disable @typescript-eslint/naming-convention */
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { WriteAppointmentDataUseCase }          from '@orm-client/application-module'
import { getFormattedAppointmentData }          from '@telegram-bot/application-module/getters'
import { getUserFullName }                      from '@telegram-bot/application-module/getters'

import { TelegramClientPort }                   from '../../ports/index.js'
import { GetCommentaryQuestionAnswerPart }      from './question-answer-pairs/index.js'
import { GetDateQuestionAnswerPart }            from './question-answer-pairs/index.js'
import { GetRadiiQuestionAnswerPart }           from './question-answer-pairs/index.js'
import { GetServiceQuestionAnswerPart }         from './question-answer-pairs/index.js'
import { GetTimeSlotQuestionAnswerPart }        from './question-answer-pairs/index.js'
import { GetCarBodyQuestionAnswerPart }         from './question-answer-pairs/index.js'
import { GetApprovalQuestionAnswerPair }        from './question-answer-pairs/index.js'

@Injectable()
export class AppointmentConversationService {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly writeAppointmentDataUseCase: WriteAppointmentDataUseCase,
    private readonly appointmentGetDateConversationPart: GetDateQuestionAnswerPart,
    private readonly appointmentGetTimeSlotConversationPart: GetTimeSlotQuestionAnswerPart,
    private readonly appointmentGetCarBodyConversationPart: GetCarBodyQuestionAnswerPart,
    private readonly appointmentGetRadiiConversationPart: GetRadiiQuestionAnswerPart,
    private readonly appointmentGetServicesConversationPart: GetServiceQuestionAnswerPart,
    private readonly appointmentGetCommentaryConversationPart: GetCommentaryQuestionAnswerPart,
    private readonly appointmentGetApprovalConversationPart: GetApprovalQuestionAnswerPair
  ) {}

  async process(ctx: TelegramBotFormattedContextType): Promise<void> {
    try {
      const startConversationMessage =
        this.telegramClient.ruLocale.appointmentConversation_startConversationMessage
      await this.telegramClient.sendMessage(ctx, startConversationMessage)

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

      // TODO подставить usename бота оператора
      await this.telegramClient.sendMessage(
        ctx,
        this.telegramClient.ruLocale.appointmentConversation_endConversatoinMessage
      )

      this.telegramClient.removeConversation(ctx.chatId)
    } catch (error) {
      // eslint-disable-next-line
      console.error(error)
      const { appointmentConversation_serverErrorMessage } = this.telegramClient.ruLocale
      await this.telegramClient.sendMessage(ctx, appointmentConversation_serverErrorMessage)
    }
  }
}
