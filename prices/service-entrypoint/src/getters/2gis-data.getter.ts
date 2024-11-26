import { format2gisGoodsCategoryData } from '../formatters/index.js'
import { format2gisGoodsData }         from '../formatters/index.js'

export const get2gisData = (goodsData, goodsCategoryData) => {
  const goodsData_2gisFormatted = format2gisGoodsData(goodsData)
  const goodsCategoryData_2gisFormatted = format2gisGoodsCategoryData(goodsCategoryData)

  return [goodsData_2gisFormatted, goodsCategoryData_2gisFormatted]
}
