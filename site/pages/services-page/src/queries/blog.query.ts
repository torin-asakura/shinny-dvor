import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_BLOG = gql`
  query GetBlog {
    blogItems {
      nodes {
        contentAddons {
          title
          role
        }
      }
    }
  }
`

const runBlogQuery = async () => {
  const client = getClient()

  const { data: blogData } = await client.query({
    query: GET_BLOG,
  })

  if (blogData) {
    return {
      blog: blogData.blogItems.nodes,
    }
  }

  return { blog: [] }
}

export { runBlogQuery }
