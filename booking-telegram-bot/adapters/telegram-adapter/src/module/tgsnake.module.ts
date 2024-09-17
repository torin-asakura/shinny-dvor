import { Module }           from '@nestjs/common'

import { tgsnakeProviders } from '../providers/index.js'

@Module({
  providers: [...tgsnakeProviders],
  exports: [...tgsnakeProviders],
})
export class TgsnakeModule {}
