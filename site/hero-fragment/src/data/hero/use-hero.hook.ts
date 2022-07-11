import { useQuery } from '@apollo/client'

import { GET_HERO } from './hero.query'

const useHero = () => {
  const { data, error } = useQuery(GET_HERO)

  if (error) {
    throw new Error(error.message)
  }

  return { hero: data?.heroFragments.nodes || [] }
}

export { useHero }
