import { NestLogger }                 from '@atls/nestjs-logger'
import { NestFactory }                from '@nestjs/core'

import { BotListenProcessor }         from '@telegram-bot/infrastructure-module'

import { BotServiceEntrypointModule } from './bot-service-entrypoint.module.js'

declare const module: {
  hot: {
    accept: VoidFunction
    dispose: (param: VoidFunction) => void
  }
  accept: VoidFunction
  dispose: VoidFunction
}

const bootstrap = async () => {
  const app = await NestFactory.create(BotServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  app.enableShutdownHooks()

  await app.listen(3000)

  const processor = app.get(BotListenProcessor)
  await processor.process()

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
