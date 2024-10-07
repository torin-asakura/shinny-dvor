import { NestLogger }                 from '@atls/nestjs-logger'
import { NestFactory }                from '@nestjs/core'

import { BotListenProcessor }         from '@telegram-bot/infrastructure-module'

import { BotServiceEntrypointModule } from './bot-service-entrypoint.module.js'

// eslint-disable-next-line @next/next/no-assign-module-variable
declare const module: {
  hot: {
    accept: VoidFunction
    dispose: (param: VoidFunction) => void
  }

  accept: VoidFunction
  dispose: VoidFunction
}

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(BotServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  app.enableShutdownHooks()

  await app.listen(3000)

  const processor = app.get(BotListenProcessor)
  await processor.processCommand_startCommand()
  await processor.processCommand_helpCommand()
  await processor.processCommand_createAppointment()
  await processor.processReceiveMessage()

  if (module.hot) {
    module.hot.accept()
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    module.hot.dispose(async () => app.close())
  }
}

bootstrap()
