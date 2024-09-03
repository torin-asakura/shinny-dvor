import { useSuspenseQuery } from '@apollo/client'

import { GET_WORK_RESULTS } from './get-work-results-data.query.js'

const getWorkResultsData = () => {
  const { data } = useSuspenseQuery(GET_WORK_RESULTS)

  if (data) {
    return {
      workResults: data.workResultItems.nodes,
    }
  }

  return { workResults: [] }
}

export { getWorkResultsData }
