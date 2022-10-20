import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

export const GET_POST = gql`
  query GetPostBy($uri: String!) {
    postBy(uri: $uri) {
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

const runPostQuery = async (uri) => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_POST,
    variables: { uri },
  })

  if (data) {
    return {
      postBy: data.postBy,
    }
  }

  return { postBy: [] }
}

export { runPostQuery }
