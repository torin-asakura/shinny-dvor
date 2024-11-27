import { Injectable }      from '@nestjs/common'

import { GOODS_LIST_PATH } from '../constants/index.js'
import { API_URL }         from '../constants/index.js'
import { fetchData }       from '../helpers/index.js'

@Injectable()
export class GetGoodsDataService {
  async process() {
    const goodsData_json = await fetchData(`${API_URL}${GOODS_LIST_PATH}`)
    return goodsData_json
  }
}
