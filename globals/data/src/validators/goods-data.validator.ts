/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { GoodsDataType }       from '../interfaces/index.js'

import { GoodsDataValidationError } from '../error/index.js'

export const goodsDataValidator = (goodsData_json: any): GoodsDataType => {
  if (!goodsData_json.pages) throw new GoodsDataValidationError('pages')
  if (!goodsData_json.rows) throw new GoodsDataValidationError('rows')

  return goodsData_json as GoodsDataType
}
