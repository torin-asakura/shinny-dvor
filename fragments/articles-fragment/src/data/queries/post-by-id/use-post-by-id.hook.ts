import { useQuery }       from '@apollo/client'

import { GET_POST_BY_ID } from './post-by-id.query'

const usePostById = ({ postId }) => {
  const { data, error } = useQuery(GET_POST_BY_ID, {
    variables: { postId },
  })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    return data.post
  }

  return {}
}

export { usePostById }
