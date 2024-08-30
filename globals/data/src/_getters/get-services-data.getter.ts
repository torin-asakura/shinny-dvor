import type { ServicesQueryDataType } from '@globals/data'

import { GET_SERVICES }               from '@globals/data'
import { getClient }                  from '@globals/data'

// TODO type
// const getServicesData = async ({ radiiData }: { radiiData: any }) => {
const getServicesData = async () => {
  const client = getClient()

  const { data }: { data: ServicesQueryDataType } = await client.query({
    query: GET_SERVICES,
  })

  if (data && data.services) {
    return {
      services: data.services.nodes,
    }
  }

  return { services: [] }
}

export { getServicesData }
