import { GET_FRAGMENTS } from '@globals/data'
import { getClient }     from '@globals/data'

const runFragmentsQuery = async () => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_FRAGMENTS,
  })

  if (data) {
    return {
      fragments: data.fragments.nodes,
    }
  }

  return { fragments: [] }
}

export { runFragmentsQuery }
