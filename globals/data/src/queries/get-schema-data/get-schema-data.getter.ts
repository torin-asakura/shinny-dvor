/* eslint-disable */

import type { SchemaQueryDataType } from '@globals/data'

import { useSuspenseQuery }         from '@apollo/client'

import { GET_SCHEMA }               from '@globals/data'

const getSchemaData = () => {
  const { data }: { data: SchemaQueryDataType } = useSuspenseQuery(GET_SCHEMA)

  const serviceItem = data.__schema.types.filter(
    (item) => item.name === 'Service_Servicesparams_Price'
  )[0]

  return { schema: serviceItem || [] }
}

export { getSchemaData }
