const TIME_SLOT_STEP_MIN = 30
export const TIME_SLOT_STEP_MS = 1000 * 60 * TIME_SLOT_STEP_MIN

export const DAY_MS = 1000 * 60 * 60 * 24
export const SUGGESTED_DAYS_QUANTITY = 7
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
}

export const CLOSED_TIME_SLOT_TEXT = 'X'

export const TIME_SLOT_KEYBOARD_ROW_MAX_ITEMS = 4

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
