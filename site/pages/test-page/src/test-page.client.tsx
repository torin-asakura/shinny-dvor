'use client'

import { getAvailableRadiiData }      from '@globals/data'
import { getCarBodiesData }           from '@globals/data'
import { getContactsData }            from '@globals/data'
import { getFragmentsData }           from '@globals/data'
import { getNavigationData }          from '@globals/data'
import { getServicesData }            from '@globals/data'
import { replaceServicePricesHelper } from '@globals/data'

export const TestPageClient = ({ servicesDataToReplace }) => {
  const { fragments } = getFragmentsData()
  const { contacts } = getContactsData()
  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { services: baseServices } = getServicesData()
  const { carBodies } = getCarBodiesData()

  const services = replaceServicePricesHelper(baseServices, servicesDataToReplace)

  return 'test page client'
}
