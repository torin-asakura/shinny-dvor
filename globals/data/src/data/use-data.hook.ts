import { useQuery }         from '@apollo/client'

import { GET_FRAGMENTS }    from './queries'
import { extractFragments } from './extract-fragments'

const useData = () => {
  const { data, error } = useQuery(GET_FRAGMENTS)

  let fragments

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    fragments = extractFragments(data?.fragments.nodes)
  }

  return { fragments: fragments || {} }
}

export { useData }
