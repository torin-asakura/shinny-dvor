/* eslint-disable */

import type { GetAvailableRadiiQuery as AvailableRadiiQueryDataType } from '@globals/data'

import { useSuspenseQuery }                                           from '@apollo/client'

import { GET_AVAILABLE_RADII }                                        from './get-available-radii-data.query.js'

const getAvailableRadiiData = () => {
  const { data }: { data: AvailableRadiiQueryDataType } = useSuspenseQuery(GET_AVAILABLE_RADII)

  if (data.availableRadiusItems) {
    return {
      availableRadii: data.availableRadiusItems.nodes,
    }
  }

  return { availableRadii: [] }
}

export { getAvailableRadiiData }
