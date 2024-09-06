import type { PostQueryDataType } from '@globals/data'

import { useSuspenseQuery }       from '@apollo/client'

import { GET_BLOG_POST }          from '@globals/data'

const getPostData = (uri: string) => {
  const { data }: { data: PostQueryDataType } = useSuspenseQuery(GET_BLOG_POST, {
    variables: { uri },
  })

  if (data) {
    return {
      postBy: data.postBy,
    }
  }

  return { postBy: [] }
}

export { getPostData }
