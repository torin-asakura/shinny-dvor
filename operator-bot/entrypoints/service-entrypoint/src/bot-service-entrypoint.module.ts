import { Module }                          from '@nestjs/common'

import { TelegramBotInfrastructureModule } from '@operator-bot/telegram-bot-context_infrastructure-module'

@Module({
  imports: [TelegramBotInfrastructureModule.register()],
})
export class BotServiceEntrypointModule {}
