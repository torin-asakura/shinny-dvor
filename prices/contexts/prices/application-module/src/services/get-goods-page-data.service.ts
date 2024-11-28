import { Injectable }             from '@nestjs/common'

import { FetchService }           from '@prices/fetcher-adapter-module'
import { goodsDataValidator }     from '@globals/data'

import { GOODS_LIST_PATH }        from '../constants/index.js'
import { API_URL }                from '../constants/index.js'
import { validateResponseHelper } from '../helpers/index.js'

type ValidDataType = ReturnType<typeof goodsDataValidator>

@Injectable()
export class GetGoodsPagesDataService {
  constructor(private readonly fetchService: FetchService) {}

  async process(pages: number): Promise<Array<ValidDataType | null>> {
    const responseTextPromises = [...Array(pages)].map(async (_, index) =>
      this.fetchService.process(`${API_URL}${GOODS_LIST_PATH}?pageNumber=${index}`))

    const responsTextArray = await Promise.all(responseTextPromises)

    return responsTextArray.map((responseText) => {
      if (responseText)
        return validateResponseHelper<ValidDataType>(responseText, goodsDataValidator)
      return null
    })
  }
}
