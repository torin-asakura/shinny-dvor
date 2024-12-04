import type { OnModuleInit }       from '@nestjs/common'

import { Injectable }              from '@nestjs/common'
import { Inject }                  from '@nestjs/common'
import { ClientProxy }             from '@nestjs/microservices'

import { StartCommandUseCase }     from '@operator-bot/telegram-bot-application-module'
import { OnTgsnakeCommandService } from '@operator-bot/tgsnake-adapter'

@Injectable()
export class StartCommandProcessor implements OnModuleInit {
  constructor(
    private readonly onTgsnakeCommandService: OnTgsnakeCommandService,
    private readonly startCommand: StartCommandUseCase,
    @Inject('BOOKING_TELEGRAM_BOT_SERVICE') private client: ClientProxy
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand()
  }

  private async processCommand(): Promise<void> {
    this.onTgsnakeCommandService.process('start', async (ctx) => {
      console.log('process start command')
      this.client.emit<number>('appointment_created', { data: 'somedata' })
      console.log('after event emit')

      // TODO!
      //   await this.startCommand.execute(ctx)
    })
  }
}
