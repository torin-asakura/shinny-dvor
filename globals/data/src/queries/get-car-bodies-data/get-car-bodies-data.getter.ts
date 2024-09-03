import type { CarBodiesQueryDataType } from './get-car-bodies-data.interface.js'

import { useSuspenseQuery }            from '@apollo/client'

import { GET_CAR_BODIES }              from './get-car-bodies-data.query.js'

const getCarBodiesData = () => {
  const { data }: { data: CarBodiesQueryDataType } = useSuspenseQuery(GET_CAR_BODIES)

  if (data && data.carBodyItems) {
    return {
      carBodies: data.carBodyItems.nodes,
    }
  }

  return { carBodies: [] }
}

export { getCarBodiesData }
