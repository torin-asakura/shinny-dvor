import type { GoodsDataFormattedType } from '../interfaces/index.js'
import type { TwoGisOffersType }       from '../interfaces/index.js'

export const map2gisOffers = (goodsData: GoodsDataFormattedType): TwoGisOffersType => {
  const offers = goodsData.map(({ id, group_id, name, price }) => ({
    _attributes: {
      id,
    },
    name: {
      _text: name,
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
    description: {
      _text: name,
    },
  }))

  return offers
}
