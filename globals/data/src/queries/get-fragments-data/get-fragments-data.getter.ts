import type { FragmentsDataType } from './get-fragments-data.interface.js'

import { useSuspenseQuery }       from '@apollo/client'

import { GET_FRAGMENTS }          from './get-fragments-data.query.js'

// Promise<{ fragments: FragmentsDataType | [] }>
const getFragmentsData = () => {
  const { data }: { data: FragmentsQueryDataType } = useSuspenseQuery(GET_FRAGMENTS)

  if (data && data.fragments && data.fragments) {
    return {
      fragments: data.fragments.nodes,
    }
  }

  return { fragments: [] }
}

export { getFragmentsData }
