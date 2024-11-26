import type { GoodsDataType }       from '../interfaces/goods-data.interface.js'

import { GoodsDataValidationError } from '../errors/index.js'

export const goodsDataValidator = (goodsData_json: any): GoodsDataType => {
  if (!goodsData_json.pages) throw new GoodsDataValidationError('pages')
  if (!goodsData_json.rows) throw new GoodsDataValidationError('rows')

  return goodsData_json as GoodsDataType
}
