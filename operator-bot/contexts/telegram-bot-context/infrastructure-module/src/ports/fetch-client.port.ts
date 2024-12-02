import type { FetchClientPort } from '@operator-bot/telegram-bot-application-module'

import { Injectable }           from '@nestjs/common'
import { FetchService }         from '@operator-bot/fetcher-adapter-module'

@Injectable()
export class FetchClientPortImpl implements FetchClientPort {
  constructor(private readonly fetchService: FetchService) {}

  async post(url: string, body: string): Promise<string> {
    return this.fetchService.post(url, body)
  }
}
