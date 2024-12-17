import { Logger }            from '@atls/logger'
import { Injectable }        from '@nestjs/common'

import { fetch }             from 'undici'

import { NullResponseError } from '../exceptions/index.js'

@Injectable()
export class FetchService {
  readonly name = 'fetch-service'

  private readonly logger = new Logger(FetchService.name)

  async post(url: string, body: string): Promise<string | void> {
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })

      const responseText = await response.text()
      if (responseText) {
        this.logger.debug(`successful fetching: ${url}`)
        return responseText
      }

      throw new NullResponseError(url)
    } catch (_error) {
      const error = _error as unknown as Error
      console.log(error)
    }
  }
}
