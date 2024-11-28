import type { GoodsDataType }                    from '../interfaces/index.js'
import type { GoodsCategoryDataType }            from '../interfaces/index.js'
import type { GoodsDataFormattedType }           from '../interfaces/index.js'
import type { GoodsCategoriesDataFormattedType } from '../interfaces/index.js'

import { map2gisGoodsCategoryData }              from '../mappers/index.js'
import { map2gisGoodsData }                      from '../mappers/index.js'

export const get2gisData = (
  goodsData: Array<GoodsDataType | null>,
  goodsCategoryData: GoodsCategoryDataType
): [GoodsDataFormattedType, GoodsCategoriesDataFormattedType] => {
  const [goodsCategoryData2gisFormatted, categoriesSpecification] =
    map2gisGoodsCategoryData(goodsCategoryData)

  const goodsData2gisFormatted = map2gisGoodsData(goodsData, categoriesSpecification)

  return [goodsData2gisFormatted, goodsCategoryData2gisFormatted]
}
