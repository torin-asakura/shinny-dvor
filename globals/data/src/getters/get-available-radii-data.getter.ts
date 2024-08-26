import type { AvailableRadiiDataType } from '@globals/data'

import { GET_AVAILABLE_RADII }         from '@globals/data'
import { getClient }                   from '@globals/data'

const getAvailableRadiiData = async () => {
  const client = getClient()

  const { data }: { data: AvailableRadiiDataType } = await client.query({
    query: GET_AVAILABLE_RADII,
  })

  if (data.availableRadiusItems) {
    return {
      availableRadii: data.availableRadiusItems.nodes,
    }
  }

  return { availableRadii: [] }
}

export { getAvailableRadiiData }
