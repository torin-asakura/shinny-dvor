// TODO to messages (locales)
export const CANCEL_APPOINTMENT_BUTTON_TEXT = 'Отменить запись'
export const CONTINUE_WITHOUT_COMMENTARY_BUTTON_TEXT = 'Продолжить без комментария'
export const APPROVE_APPOINTMENT_BUTTON_TEXT = 'Согласовать запись'
export const EDIT_APPOINTMENT_BUTTON_TEXT = 'Изменить запись'
export const TIME_SLOT_STEP_MIN = 30

export const DAY_MS = 1000 * 60 * 60 * 24
export const SUGGESTED_DAYS_QUANTITY = 7
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
}

export const WORK_TIME = {
  weekdays: {
    start: 9,
    end: 19,
  },
  weekends: {
    start: 9,
    end: 16,
  },
}
