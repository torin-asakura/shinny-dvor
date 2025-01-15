/* eslint-disable no-continue */

import type { ServicesDataToReplaceType } from '../../../interfaces/aqsi-data.interface.js'
import type { FormattedPagesDataType }    from '../../../interfaces/index.js'

import { DataVariants }                   from './helpers/get-data-variant.constants.js'
import { serviceTitles }                  from './format-output-data.constants.js'
import { carBodyTitles }                  from './format-output-data.constants.js'
import { radiiTitles }                    from './format-output-data.constants.js'
import { getDataVariantHelper }           from './helpers/get-data-variant.helper.js'

export const formatOutputDataHelper = (
  aqsiData: FormattedPagesDataType
): ServicesDataToReplaceType => {
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

    const dataVariant = getDataVariantHelper({
      carBodyTitle: itemCarBodyTitle,
      radiiTitle: itemRadiiTitle,
    })

    switch (dataVariant) {
      case DataVariants.FULL:
        output.push({
          service: itemServiceTitle.wpVariant,
          radii: itemRadiiTitle?.wpVariant || '',
          carBody: itemCarBodyTitle?.wpVariant || '',
          price: itemPrice,
        })
        break
      case DataVariants.WITHOUT_CAR_BODY:
        for (const carBodyTitle of carBodyTitles) {
          output.push({
            service: itemServiceTitle.wpVariant,
            radii: itemRadiiTitle?.wpVariant || '',
            carBody: carBodyTitle.wpVariant,
            price: itemPrice,
          })
        }
        break
      default:
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
        break
    }
  }

  return output
}
