import { Module }                          from '@nestjs/common'
import { EventEmitterModule }              from '@nestjs/event-emitter'

import { ApiInfrastructureModule }         from '@operator-bot/api-infrastructure-module'
import { TelegramBotInfrastructureModule } from '@operator-bot/telegram-bot-infrastructure-module'

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    TelegramBotInfrastructureModule.register(),
    ApiInfrastructureModule.register(),
  ],
})
export class BotServiceEntrypointModule {}
