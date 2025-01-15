import type { Options } from 'tgsnake'

const TGSHAKE_CONFIG: Options = {
  apiHash: process.env.BOOKING_BOT_API_HASH as unknown as string,
  apiId: Number(process.env.BOOKING_BOT_API_ID),
  logLevel: 'error',
  plugins: [],
  clientOptions: {},
  login: {
    sessionName: 'myapp',
    forceDotSession: true,
    botToken: process.env.BOOKING_BOT_BOT_TOKEN,
  },
  experimental: {},
}

export { TGSHAKE_CONFIG }
