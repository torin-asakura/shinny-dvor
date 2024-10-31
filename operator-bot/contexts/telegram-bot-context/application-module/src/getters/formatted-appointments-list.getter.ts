// TODO
/* eslint-disable */

const getFormattedAppointmentsMessage = ({
  appointmentData,
  titles,
}: {
  appointmentData: Record<string, any>
  titles: {
    carBodyTitle: string
    radiiTitle: string
    serviceTitle: string
    selectedDateTitle: string
    commentaryTitle: string
  }
}) => {
  // TODO telegram-bot uses that function. move it into globals/getter (get-formatted-message-bla-bla-bla...)
  const { carBodyTitle, radiiTitle, serviceTitle, selectedDateTitle, commentaryTitle } = titles
  const { carBody, radii, service, commentary, timeSlotStart } = appointmentData

  const selectedTimeDate = new Date(Number(timeSlotStart))
  const selectedDateText = selectedTimeDate.toLocaleDateString('ru-RU', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  // TODO вывести айди, для оператора это нужно
  let approvalMessage = ''
  approvalMessage += `${carBodyTitle}: ${carBody}\n`
  approvalMessage += `${radiiTitle}: ${radii}\n`
  approvalMessage += `${serviceTitle}: ${service}\n`
  approvalMessage += `${selectedDateTitle}: ${selectedDateText}\n`
  // TODO BUG на этот уровень приходит commentary в формате string. должна быть либо пустая строка, либо строка
  if (typeof commentary === 'string' && commentary !== 'true')
    approvalMessage += `${commentaryTitle}: ${commentary}`

  return approvalMessage
}

export { getFormattedAppointmentsMessage }
