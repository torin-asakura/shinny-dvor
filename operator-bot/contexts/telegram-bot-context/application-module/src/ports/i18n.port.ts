export abstract class I18nPort {
  abstract get welcome(): string

  abstract get carBodyTitle(): string

  abstract get radiiTitle(): string

  abstract get serviceTitle(): string

  abstract get selectedDateTitle(): string

  abstract get commentaryTitle(): string

  abstract get error_access(): string
}
