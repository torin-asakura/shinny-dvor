export const bookingApiHandle = async (request: Request): Promise<Response> => {
  const jsonData = await request.json()

  const bookingTelegramBotPort = process.env.BOOKING_TELEGRAM_BOT_PORT || 3000
  const fetchUrl = `http://localhost:${bookingTelegramBotPort}/booking`

  return fetch(fetchUrl, {
    method: 'post',
    body: JSON.stringify(jsonData),
  })
}
