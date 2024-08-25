import { GET_SERVICES } from '@globals/data'
import { getClient }    from '@globals/data'

const getServicesData = async () => {
  const client = getClient()

  const { data: servicesData } = await client.query({
    query: GET_SERVICES,
  })

  if (servicesData) {
    return {
      services: servicesData.services.nodes,
    }
  }

  return { services: [] }
}

export { getServicesData }
