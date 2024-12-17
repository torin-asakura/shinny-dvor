// TODO
/* eslint-disable */

import type { FormattedContextType } from '../interfaces/index.js'

export const getAppointmentIds = (ctx: FormattedContextType) => {
  const { messageText } = ctx
  const messageTextArray = messageText.split(' ')
  const appointmentIds = messageTextArray.slice(1)
  return appointmentIds
}
