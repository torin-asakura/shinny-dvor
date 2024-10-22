export abstract class I18nPort {
  abstract get welcome(): string

  abstract get help(): string

  abstract get canceled(): string

  abstract get entrypoint(): string

  abstract get appointmentConversationServerError(): string

  abstract get appointmentConversationStartConversation(): string

  abstract get appointmentConversationEndConversation(): string

  abstract get appointmentConversationCarBodyTitle(): string

  abstract get appointmentConversationRadiiTitle(): string

  abstract get appointmentConversationServiceTitle(): string

  abstract get appointmentConversationSelectedDateTitle(): string

  abstract get appointmentConversationCommentaryTitle(): string

  abstract get appointmentConversationApproveAppointmentButton(): string

  abstract get appointmentConversationEditAppointmentButton(): string

  abstract get appointmentConversationSelectDateMessage(): string

  abstract get appointmentConversationSelectCarBodyMessage(): string

  abstract get appointmentConversationSelectRadiiMessage(): string

  abstract get appointmentConversationSelectServiceMessage(): string

  abstract get appointmentConversationSelectTimeSlotMessage(): string

  abstract get appointmentConversationCancelAppointmentButton(): string

  abstract get appointmentConversationCancelAppointmentCommand(): string

  abstract get appointmentConversationMissClick(): string

  abstract get appointmentConversationContinueWithoutCommentaryButton(): string

  abstract get appointmentConversationClosedTimeSlotMessage(): string
}
