import type { GoodsCategoriesDataFormattedType } from '../interfaces/index.js'
import type { CategoriesType }                   from '../interfaces/index.js'

export const map2gisCategories = (
  goodsCategoryData: GoodsCategoriesDataFormattedType
): CategoriesType =>
  goodsCategoryData.map(({ id, name }) => ({
    _attributes: {
      id,
    },
    _text: name,
  }))
