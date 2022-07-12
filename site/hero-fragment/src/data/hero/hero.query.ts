import { gql } from '@apollo/client'

export const GET_HERO = gql`
  query GetHero {
    heroFragments {
      nodes {
        id
        title
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
  }
`
