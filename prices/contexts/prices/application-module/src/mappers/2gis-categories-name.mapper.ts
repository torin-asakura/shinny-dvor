import type { GoodsDataFormattedType }           from '../interfaces/index.js'
import type { GoodsCategoriesDataFormattedType } from '../interfaces/index.js'

export const map2gisCategoriesName = (
  goodsData: GoodsDataFormattedType,
  goodsCategoryData: GoodsCategoriesDataFormattedType
): [GoodsDataFormattedType, GoodsCategoriesDataFormattedType] => {
  const simplifiedIdSpecification: Record<string, string> = {}

  const mappedGoodsCategoryData = goodsCategoryData.map((goodsCategoryDataItem, index) => {
    const { id } = goodsCategoryDataItem
    const indexString = (index + 1).toString()
    simplifiedIdSpecification[id] = indexString
    return {
      ...goodsCategoryDataItem,
      id: indexString,
    }
  })

  const mappedGoodsData = goodsData.map((goodsDataItem, index) => {
    if (goodsDataItem) {
      return {
        ...goodsDataItem,
        id: (index + 1).toString(),
        group_id: simplifiedIdSpecification[goodsDataItem.group_id],
      }
    }
    return null
  })

  return [mappedGoodsData, mappedGoodsCategoryData]
}
