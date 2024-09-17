import { NestLogger }                 from '@atls/nestjs-logger'
import { NestFactory }                from '@nestjs/core'

import { BotServiceEntrypointModule } from './bot-service-entrypoint.module.js'

declare const module: {
  hot: any
  accept: VoidFunction
  dispose: VoidFunction
}

const bootstrap = async () => {
  const app = await NestFactory.create(BotServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  app.enableShutdownHooks()

  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
