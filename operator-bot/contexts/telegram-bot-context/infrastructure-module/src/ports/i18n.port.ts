import type { I18nPort }      from '@operator-bot/telegram-bot-context_application-module'

import { Injectable }         from '@nestjs/common'

import { I18nAdapterService } from '@operator-bot/i18n-adapter'

@Injectable()
class I18nPortImpl implements I18nPort {
  constructor(private readonly i18n: I18nAdapterService) {}

  get welcome(): string {
    return this.i18n.getWelcome()
  }

  get carBodyTitle(): string {
    return this.i18n.getCarBodyTitle()
  }

  get radiiTitle(): string {
    return this.i18n.getRadiiTitle()
  }

  get serviceTitle(): string {
    return this.i18n.getServiceTitle()
  }

  get selectedDateTitle(): string {
    return this.i18n.getSelectedDateTitle()
  }

  get commentaryTitle(): string {
    return this.i18n.getCommentaryTitle()
  }

  get error_access(): string {
    return this.i18n.getError_access()
  }
}

export { I18nPortImpl }
