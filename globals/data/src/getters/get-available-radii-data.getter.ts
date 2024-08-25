import { GET_AVAILABLE_RADII } from '@globals/data'
import { getClient }           from '@globals/data'

const getAvailableRadiiData = async () => {
  const client = getClient()

  const { data: availableRadiiData } = await client.query({
    query: GET_AVAILABLE_RADII,
  })

  if (availableRadiiData) {
    return {
      availableRadii: availableRadiiData.availableRadiusItems.nodes,
    }
  }

  return { availableRadii: [] }
}

export { getAvailableRadiiData }
