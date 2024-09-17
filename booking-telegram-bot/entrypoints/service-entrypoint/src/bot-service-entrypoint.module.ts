import { TelegramAdapterModule } from '@booking-telegram-bot/telegram-adapter-module'
import { Module }                from '@nestjs/common'

@Module({
  imports: [TelegramAdapterModule.register()],
})
export class BotServiceEntrypointModule {}
