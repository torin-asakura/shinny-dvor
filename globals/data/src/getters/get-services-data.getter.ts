import type { ServicesQueryDataType } from '@globals/data/interfaces'

import { GET_SERVICES }               from '@globals/data'
import { getClient }                  from '@globals/data'

const getServicesData = async () => {
  const client = getClient()

  const data: ServicesQueryDataType = await client.query({
    query: GET_SERVICES,
  })

  if (data) {
    return {
      services: data.services.nodes,
    }
  }

  return { services: [] }
}

export { getServicesData }
