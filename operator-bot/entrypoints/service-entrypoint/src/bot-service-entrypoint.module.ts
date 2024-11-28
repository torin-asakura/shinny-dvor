import { Module }                          from '@nestjs/common'
import { ApiInfrastructureModule }         from '@operator-bot/api-infrastructure-module'

import { TelegramBotInfrastructureModule } from '@operator-bot/telegram-bot-context_infrastructure-module'

@Module({
  imports: [TelegramBotInfrastructureModule.register(), ApiInfrastructureModule.register()],
})
export class BotServiceEntrypointModule {}
