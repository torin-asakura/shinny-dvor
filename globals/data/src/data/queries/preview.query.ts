import { gql } from "@apollo/client";

// TODO where hook?

const GET_PREVIEW = gql`
  query GetPreview($uri: String!) {
    mediaItemBy(uri: $uri) {
      sourceUrl
    }
  }
`;

export { GET_PREVIEW };
