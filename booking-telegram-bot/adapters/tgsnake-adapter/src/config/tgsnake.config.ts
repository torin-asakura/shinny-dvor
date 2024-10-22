import type { Options } from 'tgsnake'

const TGSHAKE_CONFIG: Options = {
  apiHash: process.env.BOOKING_BOT_API_HASH || '1456d21e179cc0d3165bd3f65424db87',
  apiId: Number(process.env.BOOKING_BOT_API_ID) || 27275852,
  logLevel: 'error',
  plugins: [],
  clientOptions: {},
  login: {
    sessionName: 'myapp',
    forceDotSession: true,
    botToken: process.env.BOOKING_BOT_BOT_TOKEN || '6451409399:AAENpt4tPx8m55kl-1QEQyEnAnvY4gaJ7rc',
  },
  experimental: {},
}

export { TGSHAKE_CONFIG }
