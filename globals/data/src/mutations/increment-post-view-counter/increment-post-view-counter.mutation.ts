import { gql } from '@apollo/client'

const POST_VIEW_COUNTER = gql`
  mutation IncrementCounter($post_id: Int) {
    incrementCounter(input: { post_id: $post_id }) {
      viewCount
    }
  }
`

export { POST_VIEW_COUNTER }
