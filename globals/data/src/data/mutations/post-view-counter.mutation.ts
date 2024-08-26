// TODO devide into hooks and query

import { gql }         from '@apollo/client'
import { useMutation } from '@apollo/client'

const POST_VIEW_COUNTER = gql`
  mutation IncrementCounter($post_id: Int) {
    incrementCounter(input: { post_id: $post_id }) {
      viewCount
    }
  }
`

const usePostViewCounter = () => {
  const [submit] = useMutation(POST_VIEW_COUNTER)

  return [submit]
}

export { usePostViewCounter }
