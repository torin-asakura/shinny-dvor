export abstract class I18nPort {
  abstract getWelcome(): string

  abstract getHelp(): string

  abstract getCanceled(): string

  abstract getEntrypoint(): string

  abstract getAppointmentConversationServerError(): string

  abstract getAppointmentConversationStartConversation(): string

  abstract getAppointmentConversationEndConversation(): string

  abstract getAppointmentConversationCarBodyTitle(): string

  abstract getAppointmentConversationRadiiTitle(): string

  abstract getAppointmentConversationServiceTitle(): string

  abstract getAppointmentConversationSelectedDateTitle(): string

  abstract getAppointmentConversationCommentaryTitle(): string

  abstract getAppointmentConversationApproveAppointmentButton(): string

  abstract getAppointmentConversationEditAppointmentButton(): string

  abstract getAppointmentConversationSelectDateMessage(): string

  abstract getAppointmentConversationSelectCarBodyMessage(): string

  abstract getAppointmentConversationSelectRadiiMessage(): string

  abstract getAppointmentConversationSelectServiceMessage(): string

  abstract getAppointmentConversationSelectTimeSlotMessage(): string

  abstract getAppointmentConversationCancelAppointmentButton(): string

  abstract getAppointmentConversationCancelAppointmentCommand(): string

  abstract getAppointmentConversationMissClick(): string

  abstract getAppointmentConversationContinueWithoutCommentaryButton(): string

  abstract getAppointmentConversationClosedTimeSlotMessage(): string
}
