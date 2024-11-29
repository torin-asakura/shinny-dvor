import type { GoodsDataType } from '../interfaces/index.js'
import type { RowType }       from '../interfaces/index.js'

export const mapYandexGoodsData = (
  goodsData: Array<GoodsDataType | null>
): Array<RowType | null> => {
  const mappedGoodsData = goodsData
    .map((item) => {
      if (item) {
        return item.rows.map(({ id, group_id: groupId, name, price }) => ({
          id,
          group_id: groupId,
          name,
          price,
        }))
      }

      return null
    })
    .flat()

  return mappedGoodsData
}
