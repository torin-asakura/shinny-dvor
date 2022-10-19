import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        uri
        title
        date
        excerpt
        featuredImage {
          node {
            mediaItemUrl
            altText
          }
        }
      }
    }
  }
`

const runPostsQuery = async () => {
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

export { runPostsQuery }
