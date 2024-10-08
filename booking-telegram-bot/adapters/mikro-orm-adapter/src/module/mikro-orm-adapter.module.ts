import type { DynamicModule } from '@nestjs/common'

import { MikroOrmModule }     from '@mikro-orm/nestjs'
import { PostgreSqlDriver }   from '@mikro-orm/postgresql'
// import { SqliteDriver }       from '@mikro-orm/sqlite'
import { Module }             from '@nestjs/common'

import * as services          from '../services/index.js'

@Module({})
class MikroOrmAdapterModule {
  static register(): DynamicModule {
    const serviceProviders = Object.values(services)
    const providers = [...serviceProviders]

    return {
      global: true,
      module: MikroOrmAdapterModule,
      imports: [
        MikroOrmModule.forRoot({
          entities: ['./dist/entities'],
          entitiesTs: ['./src/entities'],
          dbName: 'data.db',
          driver: PostgreSqlDriver,
        }),
      ],
      providers: [...providers],
      exports: [MikroOrmModule, ...providers],
    }
  }
}

export { MikroOrmAdapterModule }
