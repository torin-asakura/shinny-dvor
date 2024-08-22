import { gql } from "@apollo/client";

const GET_UI = gql`
  query GetUi {
    uiItems {
      nodes {
        contentAddons {
          image {
            altText
            sourceUrl
          }
          fragmentId
        }
      }
    }
  }
`;

export { GET_UI };
