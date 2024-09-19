import { Module }                          from '@nestjs/common'

import { TgsnakeAdapterModule }            from '@booking-telegram-bot/tgsnake-adapter-module'
import { TelegramBotApplicationModule }    from '@telegram-bot/application-module'
import { TelegramBotInfrastructureModule } from '@telegram-bot/infrastructure-module'

@Module({
  imports: [
    TgsnakeAdapterModule.registerAsync(),
    TelegramBotApplicationModule.register(),
    TelegramBotInfrastructureModule.registerAsync(),
  ],
})
export class BotServiceEntrypointModule {}
