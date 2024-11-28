import { Injectable }                 from '@nestjs/common'

import { FetchService }               from '@prices/fetcher-adapter-module'
import { goodsCategoryDataValidator } from '@globals/data'

import { API_URL }                    from '../constants/index.js'
import { GOODS_CATEGORY_PATH }        from '../constants/index.js'
import { validateResponseHelper }     from '../helpers/index.js'

type ValidDataType = ReturnType<typeof goodsCategoryDataValidator>

@Injectable()
export class GetGoodsCategoryDataService {
  constructor(private readonly fetchService: FetchService) {}

  async process(): Promise<ValidDataType | null> {
    const responseText = await this.fetchService.process(`${API_URL}${GOODS_CATEGORY_PATH}`)

    if (responseText) {
      return validateResponseHelper<ValidDataType>(responseText, goodsCategoryDataValidator)
    }

    return null
  }
}
