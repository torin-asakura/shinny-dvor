import { NestFactory }                from '@nestjs/core'
import { MicroserviceOptions }        from '@nestjs/microservices'
import { Transport }                  from '@nestjs/microservices'
import { FastifyAdapter }             from '@nestjs/platform-fastify'

import { BotServiceEntrypointModule } from './bot-service-entrypoint.module.js'
import { checkEnvsHelper }            from './helpers/check-envs.helper.js'

// eslint-disable-next-line @next/next/no-assign-module-variable
declare const module: {
  hot: {
    accept: VoidFunction
    dispose: (param: VoidFunction) => void
  }
}

const bootstrap = async (): Promise<void> => {
  checkEnvsHelper()

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BotServiceEntrypointModule,
    {
      ...new FastifyAdapter({
        logger: true,
      }),
      transport: Transport.TCP,
      options: {
        host: process.env.BOOKING_TELEGRAM_BOT_HOST || 'booking-telegram-bot',
        port: Number(process.env.BOOKING_TELEGRAM_BOT_PORT) || 3000,
      },
    }
  )

  app.enableShutdownHooks()
  await app.listen()

  if (module.hot) {
    module.hot.accept()
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    module.hot.dispose(async () => app.close())
  }
}

bootstrap()
