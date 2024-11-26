import { imagesData } from '../images-data/index.js'

export const get2gisOffers = (goodsData) => {
  // @ts-expect-error any
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
