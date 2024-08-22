import { gql } from "@apollo/client";

const GET_CONTACTS = gql`
  query GetContacts {
    contactItems {
      nodes {
        contactAddons {
          address
          email
          linkFb
          linkVk
          telephone
          workinghours
          fragmentId
        }
      }
    }
  }
`;

export { GET_CONTACTS };
