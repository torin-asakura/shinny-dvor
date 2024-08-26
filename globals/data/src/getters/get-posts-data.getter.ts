import type { BlogPostsQueryDataType } from '@globals/data/interfaces'

import { GET_BLOG_POSTS }              from '@globals/data'
import { getClient }                   from '@globals/data'

const getPostsData = async () => {
  const client = getClient()

  const { data }: { data: BlogPostsQueryDataType } = await client.query({
    query: GET_BLOG_POSTS,
  })

  if (data && data.posts) {
    return {
      posts: data.posts.nodes,
    }
  }

  return { posts: [] }
}

export { getPostsData }
