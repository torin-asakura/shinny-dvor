export abstract class I18nPort {
  abstract get newAppointmentOperatorMessage(): string

  abstract get cancelAppointmentOperatorButton(): string

  abstract get confirmAppointmentOperatorButton(): string

  abstract get cancelAppointmentClientMessage(): string

  abstract get confirmAppointmentClientMessage(): string

  abstract get messageReceivedToOperatorClientMessage(): string

  abstract get welcome(): string

  abstract get carBodyTitle(): string

  abstract get radiiTitle(): string

  abstract get serviceTitle(): string

  abstract get selectedDateTitle(): string

  abstract get commentaryTitle(): string

  abstract get error_access(): string
}
