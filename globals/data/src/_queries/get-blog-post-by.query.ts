import { gql } from '@apollo/client'

const GET_BLOG_POST = gql`
  query GetPostBy($uri: String!) {
    postBy(uri: $uri) {
      postId
      content
      date
      title
      viewCount
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      contentAddons {
        image {
          altText
          mediaItemUrl
        }
      }
    }
  }
`

export { GET_BLOG_POST }
