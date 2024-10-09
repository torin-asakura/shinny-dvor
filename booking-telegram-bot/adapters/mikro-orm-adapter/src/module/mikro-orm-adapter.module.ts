// import * as services            from '../services/index.js'

import type { Options }         from '@mikro-orm/postgresql'
import type { DynamicModule }   from '@nestjs/common'

import { MikroORM }             from '@mikro-orm/core'
import { MikroOrmModule }       from '@mikro-orm/nestjs'
// import { PostgreSqlDriver }     from '@mikro-orm/postgresql'
// import { SqliteDriver }         from '@mikro-orm/sqlite'
import { Module }               from '@nestjs/common'

import { MIKRO_ORM_CONFIG }     from '../constants/entity.constants.js'
import { createConfigProvider } from './mikro-orm-adapter.providers.js'
import mikroOrmOptions          from '../mikro-orm.config.js'

@Module({})
class MikroOrmAdapterModule {
  // TODO is needed? work on example
  constructor(private readonly orm: MikroORM) {}

  static register(config?: Options): DynamicModule {
    const configProvider = createConfigProvider({ ...mikroOrmOptions, ...config })

    return {
      global: true,
      module: MikroOrmAdapterModule,
      providers: [configProvider],
      exports: [configProvider],
      imports: [
        MikroOrmModule.forRootAsync({
          useFactory: (options) => options as Options,
          inject: [MIKRO_ORM_CONFIG],
        }),
      ],
    }
  }
}

export { MikroOrmAdapterModule }
