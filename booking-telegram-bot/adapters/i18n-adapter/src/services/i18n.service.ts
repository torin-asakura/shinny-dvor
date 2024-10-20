import { Injectable }  from '@nestjs/common'
import { I18nContext } from 'nestjs-i18n'
import { I18nService } from 'nestjs-i18n'

@Injectable()
class I18nAdapterService {
  constructor(private readonly i18n: I18nService) {}

  getWelcome(): string {
    return this.getMessage('common.welcome')
  }

  getHelp(): string {
    return this.getMessage('common.help')
  }

  getCanceled(): string {
    return this.getMessage('common.canceled')
  }

  getEntrypoint(): string {
    return this.getMessage('common.entrypoint')
  }

  getAppointmentConversationServerError(): string {
    // TODO move it to common
    return this.getMessage('appointment-conversation.serverErrorMessage')
  }

  getAppointmentConversationStartConversation(): string {
    return this.getMessage('appointment-conversation.startConversationMessage')
  }

  getAppointmentConversationEndConversation(): string {
    return this.getMessage('appointment-conversation.endConversatoinMessage')
  }

  getAppointmentConversationCarBodyTitle(): string {
    return this.getMessage('appointment-conversation.carBodyTitle')
  }

  getAppointmentConversationRadiiTitle(): string {
    return this.getMessage('appointment-conversation.radiiTitle')
  }

  getAppointmentConversationServiceTitle(): string {
    return this.getMessage('appointment-conversation.serviceTitle')
  }

  getAppointmentConversationSelectedDateTitle(): string {
    return this.getMessage('appointment-conversation.selectedDateTitle')
  }

  getAppointmentConversationCommentaryTitle(): string {
    return this.getMessage('appointment-conversation.commentaryTitle')
  }

  getAppointmentConversationApproveAppointmentButton(): string {
    return this.getMessage('appointment-conversation.approveAppointmentButton')
  }

  getAppointmentConversationEditAppointmentButton(): string {
    return this.getMessage('appointment-conversation.editAppointmentButton')
  }

  getAppointmentConversationSelectDateMessage(): string {
    return this.getMessage('appointment-conversation.selectDateMessage')
  }

  getAppointmentConversationSelectCarBodyMessage(): string {
    return this.getMessage('appointment-conversation.selectCarBodyMessage')
  }

  getAppointmentConversationSelectRadiiMessage(): string {
    return this.getMessage('appointment-conversation.selectRadiiMessage')
  }

  getAppointmentConversationSelectServiceMessage(): string {
    return this.getMessage('appointment-conversation.selectServiceMessage')
  }

  getAppointmentConversationSelectTimeSlotMessage(): string {
    return this.getMessage('appointment-conversation.selectTimeSlotMessage')
  }

  getAppointmentConversationCancelAppointmentButton(): string {
    return this.getMessage('appointment-conversation.cancelAppointmentButton')
  }

  getAppointmentConversationCancelAppointmentCommand(): string {
    return this.getMessage('appointment-conversation.cancelAppointmentCommand')
  }

  getAppointmentConversationMissClickMessage(): string {
    return this.getMessage('appointment-conversation.missClickMessage')
  }

  getAppointmentConversationContinueWithoutCommentaryButton(): string {
    return this.getMessage('appointment-conversation.continueWithoutCommentaryButton')
  }

  getAppointmentConversationClosedTimeSlotMessage(): string {
    return this.getMessage('appointment-conversation.closedTimeSlotMessage')
  }

  private getMessage(messagePath: string): string {
    const lang = I18nContext?.current()?.lang
    return this.i18n.t(messagePath, { lang })
  }
}

export { I18nAdapterService }
