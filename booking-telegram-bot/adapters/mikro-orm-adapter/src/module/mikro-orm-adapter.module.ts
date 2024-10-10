import type { Options }         from '@mikro-orm/postgresql'
import type { DynamicModule }   from '@nestjs/common'
import type { OnModuleInit }    from '@nestjs/common'

import { MikroORM }             from '@mikro-orm/core'
import { MikroOrmModule }       from '@mikro-orm/nestjs'
import { Module }               from '@nestjs/common'

import { MIKRO_ORM_CONFIG }     from '../constants/entity.constants.js'
import { createConfigProvider } from './mikro-orm-adapter.providers.js'
import mikroOrmOptions          from '../mikro-orm.config.js'

@Module({})
class MikroOrmAdapterModule implements OnModuleInit {
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

  async onModuleInit(): Promise<void> {
    const migrator = this.orm.getMigrator()

    // await migrator.createMigration() // creates file Migration20191019195930.ts
    // await migrator.up() // runs migrations up to the latest
    // await this.orm.close(true)

    const isMigrationNeeded = await migrator.checkMigrationNeeded()
    if (isMigrationNeeded) await migrator.up()
  }
}

export { MikroOrmAdapterModule }
