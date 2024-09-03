import { useSuspenseQuery } from '@apollo/client'

import { GET_SERVICE_BY }   from './get-service-by.query.js'

const getServiceByData = (uri: string) => {
  // const { schema } = await getSchemaData()
  // const radiiData = await getRadiiData(schema)

  const { data } = useSuspenseQuery(GET_SERVICE_BY, {
    variables: { uri },
  })

  if (data) {
    return {
      serviceBy: data.serviceBy,
    }
  }

  return { serviceBy: [] }
}

export { getServiceByData }
