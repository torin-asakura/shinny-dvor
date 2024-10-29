import type { FormattedContextType } from '../interfaces/index.js'
import type { I18nPort }             from '../ports/index.js'
import type { TelegramClientPort }   from '../ports/index.js'

import { ALLOWED_USER_IDS }          from '../config/index.js'

abstract class OperatorUseCaseAbstractClass {
  constructor(
    readonly telegramClient: TelegramClientPort,
    readonly i18n: I18nPort
  ) {}

  async execute(ctx: FormattedContextType): Promise<void> {
    const isUserOperator = this.checkOperator(ctx.userId)

    if (isUserOperator) {
      return this.executeForOperator(ctx)
    }

    return this.executeForNonOperator(ctx)
  }

  async executeForNonOperator(ctx: FormattedContextType): Promise<void> {
    const accessErrorMessage = this.i18n.error_access
    return this.telegramClient.sendMessage(ctx, accessErrorMessage)
  }

  checkOperator(userId: bigint): boolean {
    return ALLOWED_USER_IDS.includes(Number(userId))
  }

  abstract executeForOperator(ctx: FormattedContextType): Promise<void>
}

export { OperatorUseCaseAbstractClass }
