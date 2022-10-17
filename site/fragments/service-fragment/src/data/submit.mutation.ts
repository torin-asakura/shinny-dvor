import { gql } from '@apollo/client'

const SUBMIT_FORM = gql`
  mutation SubmitForm($serviceName: String!, $radius: String!, $carBody: String!, $price: String!) {
    submitForm(
      input: {
        formId: 3
        data: [
          { id: 15, value: $serviceName }
          { id: 16, value: $radius }
          { id: 17, value: $carBody }
          { id: 18, value: $price }
        ]
      }
    ) {
      message
      success
    }
  }
`

export { SUBMIT_FORM }
