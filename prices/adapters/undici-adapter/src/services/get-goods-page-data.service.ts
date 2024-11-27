import { Injectable }            from '@nestjs/common'

import { mapGoodsFetchPromises } from '../mappers/index.js'

@Injectable()
export class GetGoodsPagesDataService {
  async process(pages: number) {
    const goodsData_promises = mapGoodsFetchPromises(pages)
    const goodsData_resolved = await Promise.all(goodsData_promises)
    return goodsData_resolved
  }
}
