import { Logger }            from '@atls/logger'

import { NullResponseError } from '../errors/index.js'

const logger = new Logger('Fetch-data')

export const fetchData = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-client-key': `Application ${process.env.API_KEY}`,
    },
  })

  const responseText = await response.text()

  if (responseText) {
    const responseData = JSON.parse(responseText)
    logger.info(`successful fetching: ${url}`)
    return responseData
  }

  throw new NullResponseError(url)
}
