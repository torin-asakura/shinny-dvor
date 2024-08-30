import { GET_WORK_RESULTS } from '@globals/data'
import { getClient }        from '@globals/data'

const getWorkResultsData = async () => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_WORK_RESULTS,
  })

  if (data) {
    return {
      workResults: data.workResultItems.nodes,
    }
  }

  return { workResults: [] }
}

export { getWorkResultsData }
