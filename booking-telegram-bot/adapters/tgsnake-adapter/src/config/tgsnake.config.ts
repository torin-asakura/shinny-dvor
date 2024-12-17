import type { Options } from 'tgsnake'

const TGSHAKE_CONFIG: Options = {
  apiHash: process.env.BOOKING_BOT_API_HASH || '1456d21e179cc0d3165bd3f65424db87',
  apiId: Number(process.env.BOOKING_BOT_API_ID) || 27275852,
  logLevel: 'error',
  plugins: [],
  clientOptions: {},
  login: {
    sessionName: 'booking-telegram-bot',
    forceDotSession: true,
    botToken:
      process.env.BOOKING_BOT_BOT_TOKEN! || '7626732382:AAHybEOeH0waFmPj-WaPihhODtotaW6_60U',
  },
  experimental: {},
}

export { TGSHAKE_CONFIG }
