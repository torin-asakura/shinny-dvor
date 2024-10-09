import type { Options }     from '@mikro-orm/postgresql'
import type { Provider }    from '@nestjs/common'

import { MIKRO_ORM_CONFIG } from '../constants/index.js'

export const createConfigProvider = (options: Options): Provider => ({
  provide: MIKRO_ORM_CONFIG,
  useValue: options,
})
