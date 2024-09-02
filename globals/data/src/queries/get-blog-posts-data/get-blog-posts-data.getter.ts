import type { BlogPostsQueryDataType } from './get-blog-posts-data.interface.js'

import { GET_BLOG_POSTS }              from './get-blog-posts-data.query.js'

const getBlogPostsData = async (client, context) => {
  const { data }: { data: BlogPostsQueryDataType } = await client.query({
    query: GET_BLOG_POSTS,
    context,
  })

  if (data && data.posts) {
    return {
      posts: data.posts.nodes,
    }
  }

  return { posts: [] }
}

export { getBlogPostsData }
