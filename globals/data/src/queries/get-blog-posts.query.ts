import { gql } from '@apollo/client'

const GET_BLOG_POSTS = gql`
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

export { GET_BLOG_POSTS }
