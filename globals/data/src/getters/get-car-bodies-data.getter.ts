import type { CarBodiesQueryDataType } from '@globals/data/interfaces'

import { GET_CAR_BODIES }              from '@globals/data'
import { getClient }                   from '@globals/data'

const getCarBodiesData = async () => {
  const client = getClient()

  const data: CarBodiesQueryDataType = await client.query({
    query: GET_CAR_BODIES,
  })

  if (data && data.carBodyItems) {
    return {
      carBodies: data.carBodyItems.nodes,
    }
  }

  return { carBodies: [] }
}

export { getCarBodiesData }
