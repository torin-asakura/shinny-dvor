import { GET_SERVICE_BY } from '@globals/data'
import { getClient }      from '@globals/data'

const getServiceData = async (uri: string) => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_SERVICE_BY,
    variables: { uri },
  })

  if (data) {
    return {
      serviceBy: data.serviceBy,
    }
  }

  return { serviceBy: [] }
}

export { getServiceData }
