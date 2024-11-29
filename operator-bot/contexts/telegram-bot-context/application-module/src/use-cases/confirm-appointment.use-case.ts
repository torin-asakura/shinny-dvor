import type { FormattedContextType } from '../interfaces/index.js'

import { Injectable }                from '@nestjs/common'

import { TelegramClientPort }        from '../ports/index.js'

@Injectable()
export class ConfirmAppointmentUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  async execute(ctx: FormattedContextType): Promise<void> {
    return this.telegramClient.editMessage(ctx, 'confirm')
  }
}
