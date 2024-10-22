import type { I18nPort }      from '@telegram-bot/application-module'

import { Injectable }         from '@nestjs/common'

import { I18nAdapterService } from '@booking-telegram-bot/i18n-adapter'

@Injectable()
class I18nPortImpl implements I18nPort {
  constructor(private readonly i18n: I18nAdapterService) {}

  get welcome(): string {
    return this.i18n.getWelcome()
  }

  get help(): string {
    return this.i18n.getHelp()
  }

  get canceled(): string {
    return this.i18n.getCanceled()
  }

  get entrypoint(): string {
    return this.i18n.getEntrypoint()
  }

  get appointmentConversationServerError(): string {
    return this.i18n.getAppointmentConversationServerError()
  }

  get appointmentConversationStartConversation(): string {
    return this.i18n.getAppointmentConversationStartConversation()
  }

  get appointmentConversationEndConversation(): string {
    return this.i18n.getAppointmentConversationEndConversation()
  }

  get appointmentConversationCarBodyTitle(): string {
    return this.i18n.getAppointmentConversationCarBodyTitle()
  }

  get appointmentConversationRadiiTitle(): string {
    return this.i18n.getAppointmentConversationRadiiTitle()
  }

  get appointmentConversationServiceTitle(): string {
    return this.i18n.getAppointmentConversationServiceTitle()
  }

  get appointmentConversationSelectedDateTitle(): string {
    return this.i18n.getAppointmentConversationSelectedDateTitle()
  }

  get appointmentConversationCommentaryTitle(): string {
    return this.i18n.getAppointmentConversationCommentaryTitle()
  }

  get appointmentConversationApproveAppointmentButton(): string {
    return this.i18n.getAppointmentConversationApproveAppointmentButton()
  }

  get appointmentConversationEditAppointmentButton(): string {
    return this.i18n.getAppointmentConversationEditAppointmentButton()
  }

  get appointmentConversationSelectDateMessage(): string {
    return this.i18n.getAppointmentConversationSelectDateMessage()
  }

  get appointmentConversationSelectCarBodyMessage(): string {
    return this.i18n.getAppointmentConversationSelectCarBodyMessage()
  }

  get appointmentConversationSelectRadiiMessage(): string {
    return this.i18n.getAppointmentConversationSelectRadiiMessage()
  }

  get appointmentConversationSelectServiceMessage(): string {
    return this.i18n.getAppointmentConversationSelectServiceMessage()
  }

  get appointmentConversationSelectTimeSlotMessage(): string {
    return this.i18n.getAppointmentConversationSelectTimeSlotMessage()
  }

  get appointmentConversationCancelAppointmentButton(): string {
    return this.i18n.getAppointmentConversationCancelAppointmentButton()
  }

  get appointmentConversationCancelAppointmentCommand(): string {
    return this.i18n.getAppointmentConversationCancelAppointmentCommand()
  }

  get appointmentConversationMissClick(): string {
    return this.i18n.getAppointmentConversationMissClick()
  }

  get appointmentConversationContinueWithoutCommentaryButton(): string {
    return this.i18n.getAppointmentConversationContinueWithoutCommentaryButton()
  }

  get appointmentConversationClosedTimeSlotMessage(): string {
    return this.i18n.getAppointmentConversationClosedTimeSlotMessage()
  }
}

export { I18nPortImpl }
