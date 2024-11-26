import type { GoodsDataType }          from '../interfaces/index.js'
import type { GoodsDataFormattedType } from '../interfaces/index.js'

export const map2gisGoodsData = (
  goodsData: Array<GoodsDataType>,
  categoriesSpecification: Record<string, string>
): GoodsDataFormattedType => {
  const mappedGoodsData = goodsData
    .map((item) => {
      return item.rows.map((row) => {
        const { id, group_id, name, price } = row

        const parentCategoryId = categoriesSpecification[group_id]

        return {
          id,
          group_id: parentCategoryId || group_id,
          name,
          price,
        }
      })
    })
    .flat()

  return mappedGoodsData
}
