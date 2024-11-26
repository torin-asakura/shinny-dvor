import * as factories    from '../factory/index.js'

import { DynamicModule } from '@nestjs/common'
import { Module }        from '@nestjs/common'

@Module({})
export class PricesDomainModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: PricesDomainModule,
      providers: Object.values(factories),
      exports: Object.values(factories),
    }
  }
}
