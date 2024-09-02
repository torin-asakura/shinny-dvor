import type { AvailableRadiiQueryDataType } from './get-available-radii-data.interface.js'

import { GET_AVAILABLE_RADII }              from './get-available-radii-data.query.js'

const getAvailableRadiiData = async (client, context) => {
  const { data }: { data: AvailableRadiiQueryDataType } = await client.query({
    query: GET_AVAILABLE_RADII,
    context,
  })

  if (data.availableRadiusItems) {
    return {
      availableRadii: data.availableRadiusItems.nodes,
    }
  }

  return { availableRadii: [] }
}

export { getAvailableRadiiData }
