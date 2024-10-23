import { Module }                          from '@nestjs/common'

import { ApiInfrastructureModule }         from '@booking-telegram-bot/api-infrastructure-module'
import { QueryClientInfrastructureModule } from '@query-client/infrastructure-module'
import { TelegramBotInfrastructureModule } from '@telegram-bot/infrastructure-module'

@Module({
  imports: [
    ApiInfrastructureModule.register(),
    TelegramBotInfrastructureModule.register(),
    QueryClientInfrastructureModule.register(),
  ],
})
export class BotServiceEntrypointModule {}
