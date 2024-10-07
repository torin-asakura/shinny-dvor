/* eslint-disable */

import { Logger } from '@atls/logger'
import fetch      from 'node-fetch'

const logger = new Logger('Fetch-data')

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-client-key': `Application ${process.env.API_KEY}`,
      },
    })

    logger.info(`successful fetching: ${url}`)

    return await response.json()
  } catch (error) {
    logger.error(error)
  }

  return null
}

export { fetchData }
