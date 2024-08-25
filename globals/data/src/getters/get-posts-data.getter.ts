import { GET_POSTS } from '@globals/data'
import { getClient } from '@globals/data'

const getPostsData = async () => {
  const client = getClient()

  const { data: postsData } = await client.query({
    query: GET_POSTS,
  })

  if (postsData) {
    return {
      posts: postsData.posts.nodes,
    }
  }

  return { posts: [] }
}

export { getPostsData }
