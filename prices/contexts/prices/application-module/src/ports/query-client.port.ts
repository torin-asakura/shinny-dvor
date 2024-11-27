import type { GoodsDataType }         from '../interfaces/index.js'
import type { GoodsCategoryDataType } from '../interfaces/index.js'

export abstract class QueryClientPort {
  abstract getGoodsData(): Promise<GoodsDataType>

  abstract getGoodsCategoryData(): Promise<GoodsCategoryDataType>

  abstract getGoodsPageData(pageNumber: number): Promise<Array<GoodsDataType>>
}
