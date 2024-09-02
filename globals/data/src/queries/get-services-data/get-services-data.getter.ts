import type { ServicesQueryDataType } from './get-services-data.interface.js'

import { GET_SERVICES }               from './get-services-data.query.js'

// TODO type
// const getServicesData = async ({ radiiData }: { radiiData: any }) => {
const getServicesData = async (client, context) => {
  const { data }: { data: ServicesQueryDataType } = await client.query({
    query: GET_SERVICES,
    context,
  })

  if (data && data.services) {
    return {
      services: data.services.nodes,
    }
  }

  return { services: [] }
}

export { getServicesData }
