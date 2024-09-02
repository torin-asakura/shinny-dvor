import type { FragmentsDataType }      from './get-fragments-data.interface.js'
import type { FragmentsQueryDataType } from '@globals/data'

import { GET_FRAGMENTS }               from './get-fragments-data.query.js'

const getFragmentsData = async (
  client,
  context
): Promise<{ fragments: FragmentsDataType | [] }> => {
  const { data }: { data: FragmentsQueryDataType } = await client.query({
    query: GET_FRAGMENTS,
    context,
  })

  if (data && data.fragments && data.fragments) {
    return {
      fragments: data.fragments.nodes,
    }
  }

  return { fragments: [] }
}

export { getFragmentsData }
