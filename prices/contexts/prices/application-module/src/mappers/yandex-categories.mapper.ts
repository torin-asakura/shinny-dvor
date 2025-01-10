import type { GoodsCategoriesDataFormattedType } from '../interfaces/index.js'
import type { CategoriesType }                   from '../interfaces/index.js'

export const mapYandexCategories = (
  goodsCategoryData: GoodsCategoriesDataFormattedType
): CategoriesType =>
  goodsCategoryData.map(({ id, name }) => ({
    _attributes: {
      id,
    },
    _text: name,
  }))
