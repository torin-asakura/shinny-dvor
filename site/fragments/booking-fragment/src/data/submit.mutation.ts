import { gql } from '@apollo/client'

const SUBMIT_FORM = gql`
  mutation SubmitForm(
    $diameter: String!
    $carBody: String!
    $typeRepair: String!
    $comment: String!
  ) {
    submitForm(
      input: {
        formId: 2
        data: [
          { id: 10, value: $diameter }
          { id: 11, value: $carBody }
          { id: 12, value: $typeRepair }
          { id: 13, value: $comment }
        ]
      }
    ) {
      message
      success
    }
  }
`

export { SUBMIT_FORM }
