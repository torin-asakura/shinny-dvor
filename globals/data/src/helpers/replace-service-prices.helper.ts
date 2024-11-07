import type { ServicesDataToReplaceType } from '@globals/data'
import type { ServicesDataType }          from '@globals/data'

import { replaceServicePriceHelper }      from '@globals/data'

export const replaceServicePricesHelper = (
  wpServicesData: ServicesDataType,
  servicesDataToReplace: ServicesDataToReplaceType
): ServicesDataType => {
  if (!servicesDataToReplace.length) return wpServicesData

  const replacedServicePrices = []

  if (wpServicesData) {
    for (const service of wpServicesData) {
      // eslint-disable-next-line no-continue
      if (!service) continue
      // eslint-disable-next-line no-continue
      if (!service?.servicesParams) continue

      const outputServiceData = replaceServicePriceHelper(service, servicesDataToReplace)

      replacedServicePrices.push(outputServiceData)
    }
  }

  return replacedServicePrices
}
