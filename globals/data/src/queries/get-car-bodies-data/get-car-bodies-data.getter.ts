import type { CarBodiesQueryDataType } from './get-car-bodies-data.interface.js'

import { GET_CAR_BODIES }              from './get-car-bodies-data.query.js'

const getCarBodiesData = async (client, context) => {
  const { data }: { data: CarBodiesQueryDataType } = await client.query({
    query: GET_CAR_BODIES,
    context,
  })

  if (data && data.carBodyItems) {
    return {
      carBodies: data.carBodyItems.nodes,
    }
  }

  return { carBodies: [] }
}

export { getCarBodiesData }
