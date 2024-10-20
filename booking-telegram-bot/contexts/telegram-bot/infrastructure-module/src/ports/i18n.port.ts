import type { I18nPort }      from '@telegram-bot/application-module'

import { Injectable }         from '@nestjs/common'

import { I18nAdapterService } from '@booking-telegram-bot/i18n-adapter'

@Injectable()
class I18nPortImpl implements I18nPort {
  constructor(private readonly i18n: I18nAdapterService) {}

  getWelcome(): string {
    return this.i18n.getWelcome()
  }

  getHelp(): string {
    return this.i18n.getHelp()
  }

  getCanceled(): string {
    return this.i18n.getCanceled()
  }

  getEntrypoint(): string {
    return this.i18n.getEntrypoint()
  }
}

export { I18nPortImpl }
