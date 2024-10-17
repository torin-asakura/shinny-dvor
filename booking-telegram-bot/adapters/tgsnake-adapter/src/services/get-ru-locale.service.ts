import { Injectable } from '@nestjs/common'

import { ruLocale }   from '../locals/index.js'

@Injectable()
class GetRuLocaleService {
  process(): Record<string, string> {
    return ruLocale
  }
}

export { GetRuLocaleService }
