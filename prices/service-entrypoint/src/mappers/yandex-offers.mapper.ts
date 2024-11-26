import type { GoodsDataFormattedType } from '../interfaces/index.js'
import type { YandexOffersType }       from '../interfaces/index.js'

import { imagesData }                  from '../images-data/index.js'

export const mapYandexOffers = (goodsData: GoodsDataFormattedType): YandexOffersType => {
  const offers = goodsData.map(({ id, group_id, name, price }) => ({
    _attributes: {
      id,
    },
    name: {
      _text: name,
    },
    vendor: {
      _text: 'Шинный двор',
    },
    price: {
      _text: price,
    },
    currencyId: {
      _text: 'RUB',
    },
    categoryId: {
      _text: group_id,
    },
    picture: {
      _text: imagesData
        .map((item) => {
          if (item.id === id) return item.url

          return ''
        })
        .join(''),
    },
    description: {
      _text: name,
    },
  }))

  return offers
}
