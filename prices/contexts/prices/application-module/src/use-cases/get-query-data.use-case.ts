import { Injectable }                  from '@nestjs/common'
import { GetGoodsCategoryDataService } from '@prices/undici-adapter-module'
import { GetGoodsDataService }         from '@prices/undici-adapter-module'
import { GetGoodsPagesDataService }    from '@prices/undici-adapter-module'

import { goodsDataValidator }          from '../validators/index.js'
import { goodsCategoryDataValidator }  from '../validators/index.js'

@Injectable()
export class GetQueryDataUseCase {
  constructor(
    private readonly getGoodsCategoryDataService: GetGoodsCategoryDataService,
    private readonly getGoodsDataService: GetGoodsDataService,
    private readonly getGoodsPagesDataService: GetGoodsPagesDataService
  ) {}

  // TODO interface
  async execute(): Promise<any> {
    console.log('update-yandex-prices-use-case')

    const goodsCategoryData_json = await this.getGoodsCategoryDataService.process()
    const goodsData_json = await this.getGoodsDataService.process()

    const goodsData_valid = goodsDataValidator(goodsData_json)
    const goodsCategoryData_valid = goodsCategoryDataValidator(goodsCategoryData_json)

    const goodsPagesData_resolved = await this.getGoodsPagesDataService.process(
      goodsData_valid.pages
    )

    const goodsPagesData_valid = goodsPagesData_resolved.map((goodsData) =>
      goodsDataValidator(goodsData))

    return {
      goodsData: goodsData_valid,
      goodsPagesData: goodsPagesData_valid,
      goodsCategoryData: goodsCategoryData_valid,
    }
  }
}
