// TODO interfaces
export abstract class QueryClientPort {
  abstract getGoodsData(): Promise<any>

  abstract getGoodsCategoryData(): Promise<any>

  abstract getGoodsPageData(pageNumber: number): Promise<any>
}
