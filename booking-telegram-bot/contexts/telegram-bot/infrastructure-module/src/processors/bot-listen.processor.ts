import { TgsnakeAdapterService }  from '@booking-telegram-bot/tgsnake-adapter'
import { RunQueryUseCase }        from '@graphql-client/application-module'
import { Injectable }             from '@nestjs/common'

import { GET_CAR_BODIES }         from '@globals/data'
import { StartCommandUseCase }    from '@telegram-bot/application-module'
import { HelpCommandUseCase }     from '@telegram-bot/application-module'
import { ReceivedMessageUseCase } from '@telegram-bot/application-module'

@Injectable()
export class BotListenProcessor {
  constructor(
    private readonly telegramClient: TgsnakeAdapterService,
    private readonly startCommandUseCase: StartCommandUseCase,
    private readonly helpCommandUseCase: HelpCommandUseCase,
    private readonly receivedMessageUseCase: ReceivedMessageUseCase,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {}

  // TODO я выношу прослушивание из `useCase` для того, чтобы на уровне `useCase`
  // не обращаться к другим `useCase`, а вызывать их отсюда

  // все обращения к `useCases` будут с этого уровня.

  async process() {
    this.telegramClient.cmd('start', async (ctx) => {
      await this.startCommandUseCase.execute(ctx)
    })

    this.telegramClient.cmd('help', async (ctx) => {
      await this.helpCommandUseCase.execute(ctx)
    })

    this.telegramClient.on('msg.text', async (ctx) => {
      const queryData = await this.runQueryUseCase.execute(GET_CAR_BODIES)
      console.log('query data on processor:')
      console.log(queryData)

      // TODO fix it:
      // use conversation class
      if (!this.telegramClient.conversation?.conversation?.size) {
        // rename use case to conversation
        await this.receivedMessageUseCase.execute(ctx)
        // await runConversationA1(ctx)
      }
    })
  }
}
