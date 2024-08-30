import type { SchemaQueryDataType } from '@globals/data'

import { GET_SCHEMA }               from '@globals/data'
import { getClient }                from '@globals/data'

const getSchemaData = async () => {
  const client = getClient()

  const { data }: { data: SchemaQueryDataType } = await client.query({ query: GET_SCHEMA })

  const serviceItem = data.__schema.types.filter(
    (item) => item.name === 'Service_Servicesparams_Price'
  )[0]

  const t = serviceItem.fields

  return { schema: serviceItem || [] }
}

export { getSchemaData }
