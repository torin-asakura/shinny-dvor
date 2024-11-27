import type { GoodsDataType }                    from '../interfaces/index.js'
import type { GoodsCategoryDataType }            from '../interfaces/index.js'
import type { GoodsDataFormattedType }           from '../interfaces/index.js'
import type { GoodsCategoriesDataFormattedType } from '../interfaces/index.js'

import { map2gisGoodsCategoryData }              from '../mappers/index.js'
import { map2gisGoodsData }                      from '../mappers/index.js'

export const get2gisData = (
  goodsData: Array<GoodsDataType>,
  goodsCategoryData: GoodsCategoryDataType
): [GoodsDataFormattedType, GoodsCategoriesDataFormattedType] => {
  const [goodsCategoryData_2gisFormatted, categoriesSpecification] =
    map2gisGoodsCategoryData(goodsCategoryData)

  const goodsData_2gisFormatted = map2gisGoodsData(goodsData, categoriesSpecification)

  return [goodsData_2gisFormatted, goodsCategoryData_2gisFormatted]
}
