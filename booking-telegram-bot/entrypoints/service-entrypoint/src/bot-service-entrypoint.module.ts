import { Module }                          from '@nestjs/common'

import { ApolloAdapterModule }             from '@booking-telegram-bot/apollo-adapter'
import { I18nAdapterModule }               from '@booking-telegram-bot/i18n-adapter'
import { MikroOrmAdapterModule }           from '@booking-telegram-bot/mikro-orm-adapter'
import { TgsnakeAdapterModule }            from '@booking-telegram-bot/tgsnake-adapter'
import { QueryClientApplicationModule }    from '@query-client/application-module'
import { QueryClientInfrastructureModule } from '@query-client/infrastructure-module'
import { TelegramBotApplicationModule }    from '@telegram-bot/application-module'
import { TelegramBotInfrastructureModule } from '@telegram-bot/infrastructure-module'

@Module({
  imports: [
    TgsnakeAdapterModule.register(),
    TelegramBotApplicationModule.register(),
    TelegramBotInfrastructureModule.register(),
    ApolloAdapterModule.register(),
    QueryClientApplicationModule.register(),
    QueryClientInfrastructureModule.register(),
    MikroOrmAdapterModule.register(),
    I18nAdapterModule.register(),
  ],
})
export class BotServiceEntrypointModule {}
