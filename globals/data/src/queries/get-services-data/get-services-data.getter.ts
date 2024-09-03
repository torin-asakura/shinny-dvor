import type { ServicesQueryDataType } from './get-services-data.interface.js'

import { useSuspenseQuery }           from '@apollo/client'

import { GET_SERVICES }               from './get-services-data.query.js'

// TODO type
const getServicesData = () => {
  const { data }: { data: ServicesQueryDataType } = useSuspenseQuery(GET_SERVICES)

  if (data && data.services) {
    return {
      services: data.services.nodes,
    }
  }

  return { services: [] }
}

export { getServicesData }
