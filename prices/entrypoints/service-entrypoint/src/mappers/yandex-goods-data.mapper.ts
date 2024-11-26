import type { GoodsDataType } from '../interfaces/index.js'

export const mapYandexGoodsData = (goodsData: Array<GoodsDataType>) => {
  const mappedGoodsData = goodsData
    .map((item) =>
      item.rows.map(({ id, group_id, name, price }) => ({
        id,
        group_id,
        name,
        price,
      })))
    .flat()
  return mappedGoodsData
}
