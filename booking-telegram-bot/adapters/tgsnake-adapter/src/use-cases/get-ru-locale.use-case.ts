import { Injectable } from '@nestjs/common'

import { ruLocale }   from '../locals/index.js'

@Injectable()
class GetRuLocaleUseCase {
  process(): Record<string, string> {
    return ruLocale
  }
}

export { GetRuLocaleUseCase }
