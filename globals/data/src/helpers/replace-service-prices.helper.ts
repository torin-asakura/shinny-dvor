import type { ServicesDataType }      from '@globals/data'

import type { FormattedAqsiDataType } from './format-aqsi-data.interface.js'

export const replaceServicePricesHelper = (
  wpServicesData: ServicesDataType,
  aqsiSwervicesData: FormattedAqsiDataType
): ServicesDataType => {
  const replacedServicePrices = []

  if (wpServicesData) {
    for (const service of wpServicesData) {
      // eslint-disable-next-line no-continue
      if (!service?.servicesParams) continue
      const wpServiceTitle = service.servicesParams.title

      const outputServiceData = {
        ...service,
        servicesParams: {
          ...service.servicesParams,
        },
      }

      const outputPriceData: Record<string, any> = {}

      // eslint-disable-next-line no-continue
      if (!service.servicesParams.price) continue

      for (const radiiKey of Object.keys(service.servicesParams.price)) {
        // eslint-disable-next-line no-continue
        if (radiiKey === '__typename') continue

        // TODO
        // @ts-expect-error not exist
        // eslint-disable-next-line
        for (const carBodyKey of Object.keys(service.servicesParams.price[radiiKey])) {
          // eslint-disable-next-line no-continue
          if (radiiKey === '__typename') continue

          if (!outputPriceData[radiiKey]) outputPriceData[radiiKey] = {}

          const findedAqsiServiceData = aqsiSwervicesData.find((aqsiServiceData) => {
            const {
              service: aqsiServiceTitle,
              radii: aqsiRadiiTitle,
              carBody: aqsiCarBodyTitle,
            } = aqsiServiceData

            if (
              aqsiServiceTitle === wpServiceTitle &&
              aqsiRadiiTitle === radiiKey &&
              aqsiCarBodyTitle === carBodyKey
            ) {
              return true
            }

            return false
          })

          // eslint-disable-next-line no-continue
          if (!findedAqsiServiceData) continue
          outputPriceData[radiiKey][carBodyKey] = findedAqsiServiceData.price
        }
        outputServiceData.servicesParams.price = outputPriceData
      }

      replacedServicePrices.push(outputServiceData)
    }
  }

  return replacedServicePrices
}
