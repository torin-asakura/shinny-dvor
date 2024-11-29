import type { QueryDataType }          from '../interfaces/index.js'

import { Injectable }                  from '@nestjs/common'

import { EmptyResponseDataError }      from '../exceptions/index.js'
import { GetGoodsCategoryDataService } from './get-goods-category-data.service.js'
import { GetGoodsDataService }         from './get-goods-data.service.js'
import { GetGoodsPagesDataService }    from './get-goods-page-data.service.js'

@Injectable()
export class GetQueryDataService {
  constructor(
    private readonly getGoodsCategoryDataService: GetGoodsCategoryDataService,
    private readonly getGoodsDataService: GetGoodsDataService,
    private readonly getGoodsPagesDataService: GetGoodsPagesDataService
  ) {}

  async process(): Promise<QueryDataType> {
    const goodsCategoryData = await this.getGoodsCategoryDataService.process()
    const goodsData = await this.getGoodsDataService.process()

    if (goodsData && goodsCategoryData) {
      const goodsPagesData = await this.getGoodsPagesDataService.process(goodsData.pages)

      return {
        goodsData,
        goodsPagesData,
        goodsCategoryData,
      }
    }

    throw new EmptyResponseDataError()
  }
}
