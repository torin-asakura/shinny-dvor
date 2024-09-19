import { Module }                          from '@nestjs/common'
import { TelegramBotApplicationModule }    from '@telegram-bot/application-module'
import { TelegramBotInfrastructureModule } from '@telegram-bot/infrastructure-module'

import { TgsnakeAdapterModule }            from '@booking-telegram-bot/tgsnake-adapter-module'

@Module({
  imports: [
    TgsnakeAdapterModule.registerAsync(),
    TelegramBotApplicationModule.register(),
    TelegramBotInfrastructureModule.registerAsync(),
  ],
})
export class BotServiceEntrypointModule {}
