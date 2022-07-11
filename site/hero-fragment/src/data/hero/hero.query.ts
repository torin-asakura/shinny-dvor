import { gql } from '@apollo/client'

export const GET_HERO = gql`
  query GetHero {
    heroFragments {
      nodes {
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
