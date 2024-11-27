import type { QueryDataType }          from '../interfaces/index.js'

import { Injectable }                  from '@nestjs/common'
import { GetGoodsCategoryDataService } from '@prices/undici-adapter-module'
import { GetGoodsDataService }         from '@prices/undici-adapter-module'
import { GetGoodsPagesDataService }    from '@prices/undici-adapter-module'

import { goodsDataValidator }          from '@globals/data'
import { goodsCategoryDataValidator }  from '@globals/data'

@Injectable()
export class GetQueryDataUseCase {
  constructor(
    private readonly getGoodsCategoryDataService: GetGoodsCategoryDataService,
    private readonly getGoodsDataService: GetGoodsDataService,
    private readonly getGoodsPagesDataService: GetGoodsPagesDataService
  ) {}

  async execute(): Promise<QueryDataType> {
    const goodsCategoryDataJson = await this.getGoodsCategoryDataService.process()
    const goodsDataJson = await this.getGoodsDataService.process()

    const goodsDataValid = goodsDataValidator(goodsDataJson)
    const goodsCategoryDataValid = goodsCategoryDataValidator(goodsCategoryDataJson)

    const goodsPagesDataResolved = await this.getGoodsPagesDataService.process(goodsDataValid.pages)

    const goodsPagesDataValid = goodsPagesDataResolved.map((goodsData) =>
      goodsDataValidator(goodsData))

    return {
      goodsData: goodsDataValid,
      goodsPagesData: goodsPagesDataValid,
      goodsCategoryData: goodsCategoryDataValid,
    }
  }
}
