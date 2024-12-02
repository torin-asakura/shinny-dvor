import { Logger }            from '@atls/logger'
import { Injectable }        from '@nestjs/common'
import { fetch }             from 'undici'

import { NullResponseError } from '../exceptions/index.js'

@Injectable()
export class FetchService {
  readonly name = 'fetch-service'

  private readonly logger = new Logger(FetchService.name)

  async get(url: string, headers: Record<string, string>): Promise<string> {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    })

    const responseText = await response.text()

    if (responseText) {
      this.logger.debug(`successful fetching: ${url}`)
      return responseText
    }

    throw new NullResponseError(url)
  }
}
