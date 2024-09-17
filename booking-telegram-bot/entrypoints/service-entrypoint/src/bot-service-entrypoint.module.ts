import { TelegramAdapterModule } from '@booking-telegram-bot/telegram-adapter-module'
import { Module }                from '@nestjs/common'

// import { BotApplicationModule }    from '@bot/application-module'
// import { CqrsAdapterModule }       from '@bot/cqrs-adapter-module'
// import { BotInfrastructureModule } from '@bot/infrastructure-module'
// import { S3AdapterModule }         from '@bot/s3-adapter-module'
// import { StripeAdapterModule }     from '@bot/stripe-adapter'
// import { TelegramAdapterModule }   from '@bot/telegram-adapter-module'
// import { TypeormAdapterModule }    from '@bot/typeorm-adapter-module'

@Module({
  imports: [
    TelegramAdapterModule.register(),
    //     CqrsAdapterModule.register(),
    //     TelegramAdapterModule.register(),
    //     TypeormAdapterModule.register(),
    //     S3AdapterModule.register(),
    //     BotApplicationModule.register(),
    //     BotInfrastructureModule.register(),
    //     StripeAdapterModule.register(),
  ],
})
export class BotServiceEntrypointModule {}
