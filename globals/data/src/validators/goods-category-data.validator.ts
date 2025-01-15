/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { GoodsCategoryDataType }       from '../interfaces/index.js'

import { GoodsCategoryDataValidationError } from '../error/index.js'

export const goodsCategoryDataValidator = (goodsCategoryData_json: any): GoodsCategoryDataType => {
  for (const goodsCategoryDataItem of goodsCategoryData_json) {
    if (!goodsCategoryDataItem.id) throw new GoodsCategoryDataValidationError('id')
    if (!goodsCategoryDataItem.name) throw new GoodsCategoryDataValidationError('name')
  }

  return goodsCategoryData_json as GoodsCategoryDataType
}
