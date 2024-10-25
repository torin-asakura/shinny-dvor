export const bookingApiHandle = async (request: Request): Promise<Response> => {
  const jsonData = await request.json()

  const bookingTelegramBotHostname = process.env.BOOKING_TELEGRAM_BOT_HOSTNAME || 'http://localhost'
  const bookingTelegramBotPort = process.env.BOOKING_TELEGRAM_BOT_PORT || 3000

  const fetchUrl = `${bookingTelegramBotHostname}:${bookingTelegramBotPort}/booking`

  return fetch(fetchUrl, {
    method: 'post',
    body: JSON.stringify(jsonData),
  })
}
