/* eslint-disable no-continue */

import type { AqsiDataType }                          from '@globals/data'

import type { RequiredReplaceServicePriceHelperType } from './replace-service-price.interface.js'

export const replaceServicePriceHelper = <T>(
  service: RequiredReplaceServicePriceHelperType & T,
  aqsiSwervicesData: AqsiDataType
): T => {
  if (!aqsiSwervicesData.length) return service

  if (!service) return service
  if (!(typeof service === 'object')) return service
  if (!service?.servicesParams) return service

  const wpServiceTitle = service.servicesParams.title

  const outputServiceData = {
    ...service,
    servicesParams: {
      ...service.servicesParams,
    },
  }

  const outputPriceData: Record<string, Record<string, number>> = {}

  if (!service.servicesParams.price) return service

  for (const radiiKey of Object.keys(service.servicesParams.price)) {
    if (radiiKey === '__typename') continue

    const carBodyKeys = Object.keys(service.servicesParams.price[radiiKey] as Record<string, any>)
    if (!carBodyKeys.length) continue

    for (const carBodyKey of carBodyKeys) {
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

      if (!findedAqsiServiceData) continue
      outputPriceData[radiiKey][carBodyKey] = findedAqsiServiceData.price
    }
    outputServiceData.servicesParams.price = outputPriceData
  }

  return outputServiceData
}
