import type { GoodsCategoryDataType } from './goods-category-data.interface.js'
import type { GoodsDataType }         from './goods-data.interface.js'

export type QueryDataType = {
  goodsData: GoodsDataType
  goodsPagesData: Array<GoodsDataType | null>
  goodsCategoryData: GoodsCategoryDataType
}
