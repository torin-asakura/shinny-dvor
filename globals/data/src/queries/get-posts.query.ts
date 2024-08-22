import { gql } from "@apollo/client";

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
`;

export { GET_POSTS };
