import type { Options } from 'tgsnake'

const TGSHAKE_CONFIG: Options = {
  apiHash: process.env.BOOKING_BOT_API_HASH || '1456d21e179cc0d3165bd3f65424db87',
  apiId: Number(process.env.BOOKING_BOT_API_ID) || 27275852,
  logLevel: 'error',
  plugins: [],
  clientOptions: {},
  login: {
    sessionName: 'operator-bot',
    forceDotSession: true,
    botToken: process.env.BOOKING_BOT_BOT_TOKEN || '7810446159:AAFoqCymsy0DWnacpG3KLIt2Zju3L2fNDAw',
  },
  experimental: {},
}

export { TGSHAKE_CONFIG }
