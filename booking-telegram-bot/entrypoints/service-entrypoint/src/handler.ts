import { NestLogger }                 from '@atls/nestjs-logger'
import { NestFactory }                from '@nestjs/core'

import { BotEventProcessor }          from '@telegram-bot/infrastructure-module'

import { BotServiceEntrypointModule } from './bot-service-entrypoint.module.js'

// declare const module: {
//   hot: any
//   accept: VoidFunction
//   dispose: VoidFunction
// }

export const handler = async (event) => {
  const app = await NestFactory.createApplicationContext(BotServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  console.log(event)

  const processor = app.get(BotEventProcessor)
  processor.process()

  // app.enableShutdownHooks()

  // await app.listen(3000)

  // if (module.hot) {
  //   module.hot.accept()
  //   module.hot.dispose(() => app.close())
  // }
}
