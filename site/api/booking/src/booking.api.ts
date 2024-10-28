import { fetchTelegramBotHelper } from './fetch-telegram-bot-service.helper.js'

export const bookingApiHandle = async (request: Request): Promise<Response> => {
  const bookingTelegramBotOrigin = process.env.BOOKING_TELEGRAM_BOT_ORIGIN || 'http://localhost'
  const bookingTelegramBotPort = process.env.BOOKING_TELEGRAM_BOT_PORT || 3000

  const fetchUrl = `${bookingTelegramBotOrigin}:${bookingTelegramBotPort}/booking`
  const jsonData = await request.json()

  return fetchTelegramBotHelper({ url: fetchUrl, data: jsonData })
}
