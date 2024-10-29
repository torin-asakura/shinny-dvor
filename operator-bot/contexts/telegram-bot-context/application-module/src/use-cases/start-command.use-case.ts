import type { FormattedContextType }    from '../interfaces/index.js'

import { Injectable }                   from '@nestjs/common'

import { OperatorUseCaseAbstractClass } from '../interfaces/index.js'
import { TelegramClientPort }           from '../ports/index.js'
import { I18nPort }                     from '../ports/index.js'

@Injectable()
export class StartCommandUseCase extends OperatorUseCaseAbstractClass {
  // eslint-disable-next-line
  constructor(telegramClient: TelegramClientPort, i18n: I18nPort) {
    super(telegramClient, i18n)
  }

  async executeForOperator(ctx: FormattedContextType): Promise<void> {
    const welcomeMessage = this.i18n.welcome
    return this.telegramClient.sendMessage(ctx, welcomeMessage)
  }
}
