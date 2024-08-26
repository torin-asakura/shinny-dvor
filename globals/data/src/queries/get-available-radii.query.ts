import { gql } from "@apollo/client";

const GET_AVAILABLE_RADII = gql`
  query GetAvailableRadii {
    availableRadiusItems {
      nodes {
        contentAddons {
          title
          fragmentId
        }
      }
    }
  }
`;

export { GET_AVAILABLE_RADII };
