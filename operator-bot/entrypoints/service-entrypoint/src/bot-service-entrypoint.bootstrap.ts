import type { NestFastifyApplication } from '@nestjs/platform-fastify'

import { NestFactory }                 from '@nestjs/core'
import { FastifyAdapter }              from '@nestjs/platform-fastify'

import { BotServiceEntrypointModule }  from './bot-service-entrypoint.module.js'

// eslint-disable-next-line @next/next/no-assign-module-variable
declare const module: {
  hot: {
    accept: VoidFunction
    dispose: (param: VoidFunction) => void
  }
}

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create<NestFastifyApplication>(
    BotServiceEntrypointModule,
    new FastifyAdapter({
      logger: true,
    })
  )

  app.enableShutdownHooks()

  await app.listen(process.env.BOOKING_TELEGRAM_BOT_PORT || 3000)

  if (module.hot) {
    module.hot.accept()
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    module.hot.dispose(async () => app.close())
  }
}

bootstrap()
