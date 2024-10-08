import type { NestFastifyApplication } from '@nestjs/platform-fastify'

import { NestFactory }                 from '@nestjs/core'
import { FastifyAdapter }              from '@nestjs/platform-fastify'

import { BotServiceEntrypointModule }  from './bot-service-entrypoint.module.js'
import { module }                      from './bootstrap.module.js'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create<NestFastifyApplication>(
    BotServiceEntrypointModule,
    new FastifyAdapter({
      logger: true,
    })
  )

  app.enableShutdownHooks()

  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    module.hot.dispose(async () => app.close())
  }
}

bootstrap()
