import type { PostQueryDataType } from '@globals/data'

import { GET_BLOG_POST }          from '@globals/data'
import { getClient }              from '@globals/data'

const getPostData = async ({ uri }: { uri: string }) => {
  const client = getClient()

  const { data }: { data: PostQueryDataType } = await client.query({
    query: GET_BLOG_POST,
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
