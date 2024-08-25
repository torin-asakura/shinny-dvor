import { GET_POST }  from '@globals/data'
import { getClient } from '@globals/data'

const getPostData = async ({ uri }: { uri: string }) => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_POST,
    variables: { uri },
  })

  if (data) {
    return {
      postBy: data.postBy,
    }
  }

  return { postBy: [] }
}

export { getPostData }
