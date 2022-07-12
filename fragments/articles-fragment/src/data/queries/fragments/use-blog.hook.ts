import { useQuery } from '@apollo/client'

import { GET_BLOG } from './blog.query'

const useBlog = () => {
  const { data, error } = useQuery(GET_BLOG)

  if (error) {
    throw new Error(error.message)
  }

  return { blog: data?.blogFragments.nodes || [] }
}

export { useBlog }
