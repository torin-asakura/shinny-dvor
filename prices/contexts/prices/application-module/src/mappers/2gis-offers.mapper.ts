import type { GoodsDataFormattedType } from '../interfaces/index.js'
import type { TwoGisOffersType }       from '../interfaces/index.js'

export const map2gisOffers = (goodsData: GoodsDataFormattedType): TwoGisOffersType => {
  const output: TwoGisOffersType = []

  goodsData.forEach((item) => {
    if (item) {
      const { id, group_id: groupId, name, price } = item
      const outputItem = {
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
          _text: 'RUR',
        },
        categoryId: {
          _text: groupId,
        },
        description: {
          _text: name,
        },
      }

      output.push(outputItem)
    }
  })

  return output
}
