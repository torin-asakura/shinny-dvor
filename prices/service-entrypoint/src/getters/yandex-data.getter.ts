import { formatYandexGoodsData }             from '../formatters/index.js'
import { formatYandexGoodsCategoryData }     from '../formatters/index.js'
import { formatYandexGoodsCategoryDataDeep } from '../formatters/index.js'

export const getYandexData = (goodsData, goodsCategoryData) => {
  const goodsData_yandexFormatted = formatYandexGoodsData(goodsData)
  const goodsCategoryData_yandexFormatted = formatYandexGoodsCategoryData(goodsCategoryData)
  const goodsCategoryDataDeep_yandexFormatted = formatYandexGoodsCategoryDataDeep(goodsCategoryData)

  const goodsCategoryData_yandexSummary = [
    ...goodsCategoryData_yandexFormatted,
    ...goodsCategoryDataDeep_yandexFormatted,
  ]

  return [goodsData_yandexFormatted, goodsCategoryData_yandexSummary]
}
