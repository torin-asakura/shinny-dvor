import { GET_CAR_BODIES } from '@globals/data'
import { getClient }      from '@globals/data'

const getCarBodiesData = async () => {
  const client = getClient()

  const { data: carBodiesData } = await client.query({
    query: GET_CAR_BODIES,
  })

  if (carBodiesData) {
    return {
      carBodies: carBodiesData.carBodyItems.nodes,
    }
  }

  return { carBodies: [] }
}

export { getCarBodiesData }
