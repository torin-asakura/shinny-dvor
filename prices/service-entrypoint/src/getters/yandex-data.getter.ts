import type { GoodsDataType }                    from '../interfaces/index.js'
import type { GoodsCategoryDataType }            from '../interfaces/index.js'
import type { GoodsDataFormattedType }           from '../interfaces/index.js'
import type { GoodsCategoriesDataFormattedType } from '../interfaces/index.js'

import { mapYandexGoodsData }                    from '../mappers/index.js'
import { mapYandexGoodsCategoryData }            from '../mappers/index.js'
import { mapYandexGoodsCategoryDataDeep }        from '../mappers/index.js'

export const getYandexData = (
  goodsData: Array<GoodsDataType>,
  goodsCategoryData: GoodsCategoryDataType
): [GoodsDataFormattedType, GoodsCategoriesDataFormattedType] => {
  const goodsData_yandexFormatted = mapYandexGoodsData(goodsData)

  const goodsCategoryData_yandexFormatted = mapYandexGoodsCategoryData(goodsCategoryData)
  const goodsCategoryDataDeep_yandexFormatted = mapYandexGoodsCategoryDataDeep(goodsCategoryData)

  const goodsCategoryData_yandexSummary = [
    ...goodsCategoryData_yandexFormatted,
    ...goodsCategoryDataDeep_yandexFormatted,
  ]

  return [goodsData_yandexFormatted, goodsCategoryData_yandexSummary]
}
