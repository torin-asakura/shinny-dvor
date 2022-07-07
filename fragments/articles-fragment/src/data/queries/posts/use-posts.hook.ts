import { useQuery }  from '@apollo/client'

import { Post }      from './posts.interface'
import { GET_POSTS } from './posts.query'

const usePosts = (): { posts: Post[] } => {
  const { data, error } = useQuery(GET_POSTS)

  if (error) {
    throw new Error(error.message)
  }

  return { posts: data?.posts.nodes || [] }
}

export { usePosts }
