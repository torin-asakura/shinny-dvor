import type { TwoGisOffersType } from './2gis-offers.interface.js'
import type { CategoriesType }   from './categories.interface.js'
import type { YandexOffersType } from './yandex-offers.interface.js'

export type YmlDataType = {
  _declaration: {
    _attributes: {
      version: string
      encoding: string
    }
  }
  yml_catalog: {
    shop: {
      categories: {
        category: CategoriesType
      }
      offers: {
        offer: TwoGisOffersType | YandexOffersType
      }
    }
  }
}
