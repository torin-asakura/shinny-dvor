import type { GetData }               from './data.interface.js'

import { getNavigationData }          from '@globals/data'
import { getBlogPostsData }           from '@globals/data'
import { getAvailableRadiiData }      from '@globals/data'
import { getContactsData }            from '@globals/data'
import { getServicesData }            from '@globals/data'
import { getFragmentsData }           from '@globals/data'
import { getUiData }                  from '@globals/data'
import { getWorkResultsData }         from '@globals/data'
import { getCarBodiesData }           from '@globals/data'
import { replaceServicePricesHelper } from '@globals/data'

export const getData: GetData = ({ servicesDataToReplace }) => {
  const { navigation } = getNavigationData()
  const { fragments } = getFragmentsData()
  const { contacts } = getContactsData()
  const { posts } = getBlogPostsData()
  const { availableRadii } = getAvailableRadiiData()
  const { services: baseServices } = getServicesData()
  const { ui } = getUiData()
  const { workResults } = getWorkResultsData()
  const { carBodies } = getCarBodiesData()

  const services = replaceServicePricesHelper(baseServices, servicesDataToReplace)

  return {
    navigation,
    fragments,
    contacts,
    posts,
    availableRadii,
    services,
    ui,
    workResults,
    carBodies,
  }
}
