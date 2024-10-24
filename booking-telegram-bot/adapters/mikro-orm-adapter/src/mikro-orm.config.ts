import { Migrator }         from '@mikro-orm/migrations'
import { PostgreSqlDriver } from '@mikro-orm/postgresql'
import { defineConfig }     from '@mikro-orm/postgresql'

import * as entities        from './entities/index.js'
import * as migrations      from './migrations/index.js'

const mikroOrmOptions = defineConfig({
  port: Number(process.env.DB_PORT) ?? 5432,
  host: process.env.DB_HOST ?? 'localhost',
  extensions: [Migrator],
  dbName: process.env.DB_DATABASE ?? 'db',
  user: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'password',
  driver: PostgreSqlDriver,
  entities: Object.values(entities),
  entitiesTs: Object.values(entities),
  debug: process.env.NODE_ENV !== 'production',
  migrations: {
    path: './migrations',
    migrationsList: [
      {
        name: 'Migration20240524105900.ts',
        class: migrations.Migration20241010115319,
      },
      {
        name: '@site adaptation',
        class: migrations.Migration20241024125715,
      },
    ],
    snapshot: false,
    allOrNothing: true,
    safe: true,
    dropTables: false,
    transactional: true,
    emit: 'ts',
  },
  forceUndefined: true,
})

export default mikroOrmOptions
