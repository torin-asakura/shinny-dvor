import type { GoodsDataType }                    from '../interfaces/index.js'
import type { GoodsCategoryDataType }            from '../interfaces/index.js'
import type { GoodsDataFormattedType }           from '../interfaces/index.js'
import type { GoodsCategoriesDataFormattedType } from '../interfaces/index.js'

import { mapYandexGoodsData }                    from '../mappers/index.js'
import { mapYandexGoodsCategoryData }            from '../mappers/index.js'
import { mapYandexGoodsCategoryDataDeep }        from '../mappers/index.js'

export const getYandexData = (
  goodsData: Array<GoodsDataType | null>,
  goodsCategoryData: GoodsCategoryDataType
): [GoodsDataFormattedType, GoodsCategoriesDataFormattedType] => {
  const goodsDataYandexFormatted = mapYandexGoodsData(goodsData)
  const goodsCategoryDataYandexFormatted = mapYandexGoodsCategoryData(goodsCategoryData)
  const goodsCategoryDataDeepYandexFormatted = mapYandexGoodsCategoryDataDeep(goodsCategoryData)

  const goodsCategoryDataYandexSummary = [
    ...goodsCategoryDataYandexFormatted,
    ...goodsCategoryDataDeepYandexFormatted,
  ]

  return [goodsDataYandexFormatted, goodsCategoryDataYandexSummary]
}
