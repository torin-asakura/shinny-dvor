import { useQuery }          from '@apollo/client'

import { GET_ALL_FRAGMENTS } from './fragments.query'

const useAllFragments = () => {
  const { data, error } = useQuery(GET_ALL_FRAGMENTS)

  if (error) {
    throw new Error(error.message)
  }

  return { fragments: data?.allFragment.nodes || [] }
}

export { useAllFragments }
