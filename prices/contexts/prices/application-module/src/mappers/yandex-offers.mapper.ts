import type { GoodsDataFormattedType } from '../interfaces/index.js'
import type { YandexOffersType }       from '../interfaces/index.js'

import { IMAGE_DATA }                  from '../constants/index.js'

export const mapYandexOffers = (goodsData: GoodsDataFormattedType): YandexOffersType => {
  const output: YandexOffersType = []

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
          _text: groupId,
        },
        picture: {
          _text: IMAGE_DATA.map((pictureItem) => {
            if (pictureItem.id === id) return pictureItem.url

            return ''
          }).join(''),
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
