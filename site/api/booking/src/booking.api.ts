export const bookingApiHandle = async (request: Request): Promise<Response> => {
  const jsonData = await request.json()

  const bookingTelegramBotOrigin = process.env.BOOKING_TELEGRAM_BOT_ORIGIN || 'http://localhost'
  const bookingTelegramBotPort = process.env.BOOKING_TELEGRAM_BOT_PORT || 3000

  const fetchUrl = `${bookingTelegramBotOrigin}:${bookingTelegramBotPort}/booking`

  return fetch(fetchUrl, {
    method: 'post',
    body: JSON.stringify(jsonData),
  })
}
