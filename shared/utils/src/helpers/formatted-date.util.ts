import { DateTime } from 'luxon'

const formattedDate = (date: string): string =>
  DateTime.fromISO(date).setLocale('ru').toFormat('d LLLL yyyy')

export { formattedDate }
