import type { GoodsDataType }          from '../interfaces/index.js'
import type { GoodsDataFormattedType } from '../interfaces/index.js'

export const map2gisGoodsData = (
  goodsData: Array<GoodsDataType | null>,
  categoriesSpecification: Record<string, string>
): GoodsDataFormattedType => {
  const mappedGoodsData = goodsData
    .map((item) => {
      if (item) {
        return item.rows.map((row) => {
          const { id, group_id: groupId, name, price } = row

          const parentCategoryId = categoriesSpecification[groupId]

          return {
            id,
            group_id: parentCategoryId || groupId,
            name,
            price,
          }
        })
      }

      return null
    })
    .flat()

  return mappedGoodsData
}
