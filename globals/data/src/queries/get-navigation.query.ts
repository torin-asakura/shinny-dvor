import { gql } from "@apollo/client";

const GET_NAVIGATION = gql`
  query GetNavigation {
    navigationItems {
      nodes {
        contentAddons {
          fragmentId
          title
          content
        }
      }
    }
  }
`;

export { GET_NAVIGATION };
