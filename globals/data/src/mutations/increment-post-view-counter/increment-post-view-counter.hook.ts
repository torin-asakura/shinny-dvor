import { useMutation }       from '@apollo/client'

import { POST_VIEW_COUNTER } from './increment-post-view-counter.mutation.js'

const useIncrementPostViewCounter = () => {
  const [createIncrementPostViewCounterMutation] = useMutation(POST_VIEW_COUNTER)

  const incrementViewCounter = async (postId: number): Promise<void> => {
    await createIncrementPostViewCounterMutation({
      variables: {
        post_id: postId,
      },
    })
  }

  return incrementViewCounter
}

export { useIncrementPostViewCounter }
