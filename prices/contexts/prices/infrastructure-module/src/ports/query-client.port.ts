import { Injectable }                  from '@nestjs/common'
import { QueryClientPort }             from '@prices/prices-application-module'
import { GetGoodsDataService }         from '@prices/undici-adapter-module'
import { GetGoodsCategoryDataService } from '@prices/undici-adapter-module'
import { GetGoodsPagesDataService }    from '@prices/undici-adapter-module'

@Injectable()
export class QueryClientPortImpl implements QueryClientPort {
  constructor(
    private readonly getGoodsDataService: GetGoodsDataService,
    private readonly getGoodsCategoryDataService: GetGoodsCategoryDataService,
    private readonly getGoodsPageDataService: GetGoodsPagesDataService
  ) {}

  async getGoodsData(): Promise<any> {
    return this.getGoodsDataService.process()
  }

  async getGoodsCategoryData(): Promise<any> {
    return this.getGoodsCategoryDataService.process()
  }

  async getGoodsPageData(pageNumber: number): Promise<any> {
    return this.getGoodsPageDataService.process(pageNumber)
  }
}
