import type { FragmentsQueryDataType } from '@globals/data/interfaces'

import { GET_FRAGMENTS }               from '@globals/data'
import { getClient }                   from '@globals/data'

const getFragmentsData = async () => {
  const client = getClient()

  const { data }: { data: FragmentsQueryDataType } = await client.query({
    query: GET_FRAGMENTS,
  })

  if (data && data.fragments) {
    return {
      fragments: data.fragments.nodes,
    }
  }

  return { fragments: [] }
}

export { getFragmentsData }
