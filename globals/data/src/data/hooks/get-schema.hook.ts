import { GET_SCHEMA } from '@globals/data'
import { getClient }  from '@globals/data'

const getSchema = async () => {
  const client = getClient()

  const { data } = await client.query({ query: GET_SCHEMA })

  // eslint-disable-next-line no-underscore-dangle
  const serviceItem = data.__schema.types.filter(
    (item) => item.name === 'Service_Servicesparams_Price'
  )[0]

  return { schema: serviceItem || [] }
}

export { getSchema }
