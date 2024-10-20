import type { I18nPort }      from '@telegram-bot/application-module'

import { Injectable }         from '@nestjs/common'

import { I18nAdapterService } from '@booking-telegram-bot/i18n-adapter'

@Injectable()
class I18nPortImpl implements I18nPort {
  constructor(private readonly i18n: I18nAdapterService) {}

  getWelcome(): string {
    return this.i18n.getWelcome()
  }

  getHelp(): string {
    return this.i18n.getHelp()
  }

  getCanceled(): string {
    return this.i18n.getCanceled()
  }

  getEntrypoint(): string {
    return this.i18n.getEntrypoint()
  }

  getAppointmentConversationServerError(): string {
    return this.i18n.getAppointmentConversationServerError()
  }

  getAppointmentConversationStartConversation(): string {
    return this.i18n.getAppointmentConversationStartConversation()
  }

  getAppointmentConversationEndConversation(): string {
    return this.i18n.getAppointmentConversationEndConversation()
  }

  getAppointmentConversationCarBodyTitle(): string {
    return this.i18n.getAppointmentConversationCarBodyTitle()
  }

  getAppointmentConversationRadiiTitle(): string {
    return this.i18n.getAppointmentConversationRadiiTitle()
  }

  getAppointmentConversationServiceTitle(): string {
    return this.i18n.getAppointmentConversationServiceTitle()
  }

  getAppointmentConversationSelectedDateTitle(): string {
    return this.i18n.getAppointmentConversationSelectedDateTitle()
  }

  getAppointmentConversationCommentaryTitle(): string {
    return this.i18n.getAppointmentConversationCommentaryTitle()
  }

  getAppointmentConversationApproveAppointmentButton(): string {
    return this.i18n.getAppointmentConversationApproveAppointmentButton()
  }

  getAppointmentConversationEditAppointmentButton(): string {
    return this.i18n.getAppointmentConversationEditAppointmentButton()
  }

  getAppointmentConversationSelectDateMessage(): string {
    return this.i18n.getAppointmentConversationSelectDateMessage()
  }

  getAppointmentConversationSelectCarBodyMessage(): string {
    return this.i18n.getAppointmentConversationSelectCarBodyMessage()
  }

  getAppointmentConversationSelectRadiiMessage(): string {
    return this.i18n.getAppointmentConversationSelectRadiiMessage()
  }

  getAppointmentConversationSelectServiceMessage(): string {
    return this.i18n.getAppointmentConversationSelectServiceMessage()
  }

  getAppointmentConversationSelectTimeSlotMessage(): string {
    return this.i18n.getAppointmentConversationSelectTimeSlotMessage()
  }

  getAppointmentConversationCancelAppointmentButton(): string {
    return this.i18n.getAppointmentConversationCancelAppointmentButton()
  }

  getAppointmentConversationCancelAppointmentCommand(): string {
    return this.i18n.getAppointmentConversationCancelAppointmentCommand()
  }

  getAppointmentConversationMissClick(): string {
    return this.i18n.getAppointmentConversationMissClick()
  }

  getAppointmentConversationContinueWithoutCommentaryButton(): string {
    return this.i18n.getAppointmentConversationContinueWithoutCommentaryButton()
  }

  getAppointmentConversationClosedTimeSlotMessage(): string {
    return this.i18n.getAppointmentConversationClosedTimeSlotMessage()
  }
}

export { I18nPortImpl }
