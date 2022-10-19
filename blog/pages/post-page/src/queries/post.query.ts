import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(id: $id) {
      content
      date
      title
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
  }
`

const runPostQuery = async (id) => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_POST_BY_ID,
    variables: { id },
  })

  if (data) {
    return {
      post: data.post,
    }
  }

  return { post: [] }
}

export { runPostQuery }
