import { Module }                          from '@nestjs/common'

import { QueryClientApplicationModule }    from '@query-client/application-module'
import { QueryClientInfrastructureModule } from '@query-client/infrastructure-module'
import { TelegramBotApplicationModule }    from '@telegram-bot/application-module'
import { TelegramBotInfrastructureModule } from '@telegram-bot/infrastructure-module'

@Module({
  imports: [
    TelegramBotApplicationModule.register(),
    TelegramBotInfrastructureModule.register(),
    QueryClientApplicationModule.register(),
    QueryClientInfrastructureModule.register(),
  ],
})
export class BotServiceEntrypointModule {}
