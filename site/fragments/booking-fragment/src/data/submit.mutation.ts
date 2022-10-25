import { gql } from '@apollo/client'

const SUBMIT_FORM = gql`
  mutation SubmitForm(
    $name: String!
    $phone: String!
    $diameter: String!
    $carBody: String!
    $typeRepair: String!
    $additionalService: String!
    $comment: String!
  ) {
    submitForm(
      input: {
        formId: 2
        data: [
          { id: 20, value: $name }
          { id: 21, value: $phone }
          { id: 10, value: $diameter }
          { id: 11, value: $carBody }
          { id: 12, value: $typeRepair }
          { id: 13, value: $comment }
          { id: 22, value: $additionalService }
        ]
      }
    ) {
      message
      success
    }
  }
`

export { SUBMIT_FORM }
