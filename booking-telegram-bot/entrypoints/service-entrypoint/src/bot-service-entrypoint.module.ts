import { Module }                          from '@nestjs/common'
import { TelegramBotInfrastructureModule } from '@telegram-bot/infrastructure-module'

import { TgsnakeAdapterModule }            from '@booking-telegram-bot/tgsnake-adapter-module'

@Module({
  imports: [
    TgsnakeAdapterModule.registerAsync(),
    TelegramBotInfrastructureModule.registerAsync(),
  ],
})
export class BotServiceEntrypointModule {}
