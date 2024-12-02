import type { CategoriesType }   from '../interfaces/index.js'
import type { YandexOffersType } from '../interfaces/index.js'
import type { TwoGisOffersType } from '../interfaces/index.js'
import type { YmlDataType }      from '../interfaces/index.js'

export const formatYmlData = (
  category: CategoriesType,
  offer: YandexOffersType | TwoGisOffersType
): YmlDataType => {
  const yml = {
    _declaration: {
      _attributes: {
        version: '1.0',
        encoding: 'UTF-8',
      },
    },
    yml_catalog: {
      shop: {
        categories: {
          category,
        },
        offers: {
          offer,
        },
      },
    },
  }

  return yml
}
