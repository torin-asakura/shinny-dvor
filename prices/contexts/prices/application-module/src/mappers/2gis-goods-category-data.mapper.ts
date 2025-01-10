import type { GoodsCategoryDataType }            from '../interfaces/index.js'
import type { GoodsCategoriesDataFormattedType } from '../interfaces/index.js'

export const map2gisGoodsCategoryData = (
  goodsCategoryData: GoodsCategoryDataType
): [GoodsCategoriesDataFormattedType, Record<string, string>] => {
  const categoriesSpecification: Record<string, string> = {}

  const mappedGoodsCategoryData = goodsCategoryData
    .map((item) => {
      const { id, name, children } = item

      if (children) {
        children.forEach(({ id: childrenId, parent }) => {
          categoriesSpecification[childrenId] = parent
        })
      }

      return { id, name }
    })
    .flat()

  return [mappedGoodsCategoryData, categoriesSpecification]
}
