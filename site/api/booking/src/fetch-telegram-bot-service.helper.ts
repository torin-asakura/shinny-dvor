import type { FetchTelegramBotHelperType } from './fetch-telegram-bot-service.interface.js'

const fetchTelegramBotHelper: FetchTelegramBotHelperType = async ({ url, data }) =>
  fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
  })

export { fetchTelegramBotHelper }
