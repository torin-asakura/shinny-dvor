import { ApolloAdapterModule }               from '@booking-telegram-bot/apollo-adapter'
import { TgsnakeAdapterModule }              from '@booking-telegram-bot/tgsnake-adapter'
import { GraphqlClientApplicationModule }    from '@graphql-client/application-module'
import { GraphqlClientInfrastructureModule } from '@graphql-client/infrastructure-module'
import { Module }                            from '@nestjs/common'

import { TelegramBotApplicationModule }      from '@telegram-bot/application-module'
import { TelegramBotInfrastructureModule }   from '@telegram-bot/infrastructure-module'

@Module({
  imports: [
    TgsnakeAdapterModule.register(),
    TelegramBotApplicationModule.register(),
    TelegramBotInfrastructureModule.registerAsync(),
    ApolloAdapterModule.register(),
    GraphqlClientInfrastructureModule.register(),
    GraphqlClientApplicationModule.register(),
  ],
})
export class BotServiceEntrypointModule {}
