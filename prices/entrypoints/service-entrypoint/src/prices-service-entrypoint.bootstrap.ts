import type { NestFastifyApplication } from '@nestjs/platform-fastify'

import { NestFactory }                 from '@nestjs/core'
import { FastifyAdapter }              from '@nestjs/platform-fastify'

import { PRICES_REQUIRED_ENVS }        from '@globals/config'
import { checkEnvsHelper }             from '@globals/data'

import { BotServiceEntrypointModule }  from './bot-service-entrypoint.module.js'

// eslint-disable-next-line @next/next/no-assign-module-variable
declare const module: {
  hot: {
    accept: VoidFunction
    dispose: (param: VoidFunction) => void
  }
}

const bootstrap = async (): Promise<void> => {
  checkEnvsHelper({ applicationName: 'prices', envsList: PRICES_REQUIRED_ENVS })

  const app = await NestFactory.create<NestFastifyApplication>(
    BotServiceEntrypointModule,
    new FastifyAdapter({
      logger: true,
    })
  )

  app.enableShutdownHooks()

  if (module.hot) {
    module.hot.accept()
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    module.hot.dispose(async () => app.close())
  }
}

bootstrap()
