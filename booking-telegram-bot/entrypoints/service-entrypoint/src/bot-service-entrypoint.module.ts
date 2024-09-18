import { TgsnakeAdapterModule } from '@booking-telegram-bot/tgsnake-adapter-module'
import { Module }               from '@nestjs/common'

@Module({
  imports: [TgsnakeAdapterModule.register()],
})
export class BotServiceEntrypointModule {}
