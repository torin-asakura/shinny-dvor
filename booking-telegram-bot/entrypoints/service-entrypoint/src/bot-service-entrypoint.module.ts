import { Module }                          from '@nestjs/common'

import { QueryClientInfrastructureModule } from '@query-client/infrastructure-module'
import { TelegramBotInfrastructureModule } from '@telegram-bot/infrastructure-module'

@Module({
  imports: [TelegramBotInfrastructureModule.register(), QueryClientInfrastructureModule.register()],
})
export class BotServiceEntrypointModule {}
