import { useQuery }         from '@apollo/client'

import { GET_INFOGRAPHICS } from './infographics.query'

const useInfographics = () => {
  const { data, error } = useQuery(GET_INFOGRAPHICS)

  if (error) {
    throw new Error(error.message)
  }

  return { infographics: data?.infographicFragments.nodes || [] }
}

export { useInfographics }
