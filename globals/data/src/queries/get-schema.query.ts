import { gql } from '@apollo/client'

const GET_SCHEMA = gql`
  query GetSchema {
    __schema {
      types {
        name
        fields {
          name
          type {
            fields {
              name
            }
          }
        }
      }
    }
  }
`

export { GET_SCHEMA }
