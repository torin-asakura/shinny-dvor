import { Logger }            from '@atls/logger'
import { Injectable }        from '@nestjs/common'
import { fetch }             from 'undici'

import { NullResponseError } from '../exceptions/index.js'

const logger = new Logger('fetch-service')

@Injectable()
export class FetchService {
  async process(url: string): Promise<string> {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-client-key': `Application ${process.env.API_KEY}`,
      },
    })

    const responseText = await response.text()

    if (responseText) {
      logger.info(`successful fetching: ${url}`)
      return responseText
    }

    throw new NullResponseError(url)
  }
}
