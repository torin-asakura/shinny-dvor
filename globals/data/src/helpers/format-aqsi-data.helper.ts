import type { FormattedAqsiDataType } from './format-aqsi-data.interface.js'

import { serviceTitles }              from './format-aqsi-data.constants.js'
import { carBodyTitles }              from './format-aqsi-data.constants.js'
import { radiiTitles }                from './format-aqsi-data.constants.js'

export const formatAqsiDataHelper = (
  aqsiData: Array<{ name: string; price: number }>
): FormattedAqsiDataType => {
  const output = []

  for (const aqsiDataItem of aqsiData) {
    const { name: fullServiceString, price: itemPrice } = aqsiDataItem

    const itemServiceTitle = serviceTitles.find((serviceTitle) => {
      const { aqsiVariant } = serviceTitle
      return fullServiceString.includes(aqsiVariant)
    })

    // eslint-disable-next-line no-continue
    if (!itemServiceTitle) continue

    const itemCarBodyTitle = carBodyTitles.find((carBodyTitle) => {
      const { aqsiVariant } = carBodyTitle
      return fullServiceString.includes(aqsiVariant)
    })

    const itemRadiiTitle = radiiTitles.find((radiiTitle) => {
      const { aqsiVariant } = radiiTitle
      return fullServiceString.includes(aqsiVariant)
    })

    if (itemCarBodyTitle && itemRadiiTitle) {
      output.push({
        service: itemServiceTitle.wpVariant,
        radii: itemRadiiTitle.wpVariant,
        carBody: itemCarBodyTitle.wpVariant,
        price: itemPrice,
      })
      // eslint-disable-next-line no-continue
      continue
    } else if (itemRadiiTitle && !itemCarBodyTitle) {
      for (const carBodyTitle of carBodyTitles) {
        output.push({
          service: itemServiceTitle.wpVariant,
          radii: itemRadiiTitle.wpVariant,
          carBody: carBodyTitle.wpVariant,
          price: itemPrice,
        })
      }
    } else if (!itemRadiiTitle && !itemCarBodyTitle) {
      for (const carBodyTitle of carBodyTitles) {
        for (const radiiTitle of radiiTitles) {
          output.push({
            service: itemServiceTitle.wpVariant,
            radii: radiiTitle.wpVariant,
            carBody: carBodyTitle.wpVariant,
            price: itemPrice,
          })
        }
      }
    }
  }

  return output
}
