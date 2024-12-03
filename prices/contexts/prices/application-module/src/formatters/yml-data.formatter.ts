import type { CategoriesType }   from '../interfaces/index.js'
import type { YandexOffersType } from '../interfaces/index.js'
import type { TwoGisOffersType } from '../interfaces/index.js'
import type { YmlDataType }      from '../interfaces/index.js'

export const formatYmlData = (
  category: CategoriesType,
  offer: TwoGisOffersType | YandexOffersType
): YmlDataType => {
  const dateNow = new Date(Date.now())
  const dateNowLocaleString = dateNow.toISOString().split('.')[0]

  const yml = {
    _declaration: {
      _attributes: {
        version: '1.0',
        encoding: 'UTF-8',
      },
    },
    _doctype: 'yml_catalog SYSTEM "shops.dtd"',
    yml_catalog: {
      _attributes: {
        date: dateNowLocaleString,
      },
      shop: {
        name: {
          _text: 'Шинный двор',
        },
        company: {
          _text: 'Шинный двор',
        },
        url: {
          _text: 'https://shdvor.pro',
        },
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
