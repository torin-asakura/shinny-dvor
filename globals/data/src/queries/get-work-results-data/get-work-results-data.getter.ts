import { GET_WORK_RESULTS } from './get-work-results-data.query.js'

const getWorkResultsData = async (client, context) => {
  const { data } = await client.query({
    query: GET_WORK_RESULTS,
    context,
  })

  if (data) {
    return {
      workResults: data.workResultItems.nodes,
    }
  }

  return { workResults: [] }
}

export { getWorkResultsData }
