// TODO to messages (locales)
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
