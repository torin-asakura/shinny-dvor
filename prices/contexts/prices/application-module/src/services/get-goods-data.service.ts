import { Injectable }             from '@nestjs/common'

import { FetchService }           from '@prices/fetcher-adapter-module'
import { goodsDataValidator }     from '@globals/data'

import { GOODS_LIST_PATH }        from '../constants/index.js'
import { API_URL }                from '../constants/index.js'
import { validateResponseHelper } from '../helpers/index.js'

type ValidDataType = ReturnType<typeof goodsDataValidator>

@Injectable()
export class GetGoodsDataService {
  constructor(private readonly fetchService: FetchService) {}

  async process(): Promise<ValidDataType | null> {
    const responseText = await this.fetchService.process(`${API_URL}${GOODS_LIST_PATH}`)

    if (responseText) {
      return validateResponseHelper<ValidDataType>(responseText, goodsDataValidator)
    }

    return null
  }
}
