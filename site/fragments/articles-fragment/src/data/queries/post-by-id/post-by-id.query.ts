import { gql } from '@apollo/client'

export const GET_POST_BY_ID = gql`
  query GetPostById($postId: ID!) {
    post(id: $postId) {
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
