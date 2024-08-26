import { GET_SERVICE_BY } from '@globals/data'
import { getClient }      from '@globals/data'
import { getSchemaData }  from '@globals/data/getters'
import { getRadiiData }   from '@globals/data/getters'

const getServiceData = async (uri: string) => {
  const client = getClient()

  const { schema } = await getSchemaData()
  const radiiData = await getRadiiData(schema)

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
