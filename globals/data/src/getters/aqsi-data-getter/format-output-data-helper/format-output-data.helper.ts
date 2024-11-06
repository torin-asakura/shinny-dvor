/* eslint-disable no-continue */

import type { AqsiDataType }           from '../../../interfaces/aqsi-data.interface.js'
import type { FormattedPagesDataType } from '../../../interfaces/index.js'

import { serviceTitles }               from './format-output-data.constants.js'
import { carBodyTitles }               from './format-output-data.constants.js'
import { radiiTitles }                 from './format-output-data.constants.js'

export const formatOutputDataHelper = (aqsiData: FormattedPagesDataType): AqsiDataType => {
  const output = []

  for (const aqsiDataItem of aqsiData) {
    const { name: fullServiceString, price: itemPrice } = aqsiDataItem

    if (!fullServiceString || !itemPrice) continue

    const itemServiceTitle = serviceTitles.find((serviceTitle) => {
      const { aqsiVariant } = serviceTitle
      return fullServiceString.includes(aqsiVariant)
    })

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
