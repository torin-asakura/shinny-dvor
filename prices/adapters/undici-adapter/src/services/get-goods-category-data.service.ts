import { Injectable }          from '@nestjs/common'

import { API_URL }             from '../constants/index.js'
import { GOODS_CATEGORY_PATH } from '../constants/index.js'
import { fetchData }           from '../helpers/index.js'

@Injectable()
export class GetGoodsCategoryDataService {
  async process() {
    const goodsCategoryData_json = await fetchData(`${API_URL}${GOODS_CATEGORY_PATH}`)
    return goodsCategoryData_json
  }
}
