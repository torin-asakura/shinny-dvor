import type { MikroORM }        from '@mikro-orm/core'
import type { Options }         from '@mikro-orm/postgresql'
import type { DynamicModule }   from '@nestjs/common'
import type { OnModuleInit }    from '@nestjs/common'
import type { Provider }        from '@nestjs/common'

import { MikroOrmModule }       from '@mikro-orm/nestjs'
import { Module }               from '@nestjs/common'
import { ModuleRef }            from '@nestjs/core'

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
      providers: [configProvider, ModuleRef as Provider],
      exports: [configProvider, ModuleRef],
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

    await this.createMigration(false)

    const isMigrationNeeded = await migrator.checkMigrationNeeded()
    if (isMigrationNeeded) await migrator.up()
  }

  private async createMigration(isNeeded: boolean): Promise<void> {
    if (isNeeded) {
      const migrator = this.orm.getMigrator()

      await migrator.createMigration()
      await migrator.up()
      await this.orm.close(true)
    }
  }
}

export { MikroOrmAdapterModule }
