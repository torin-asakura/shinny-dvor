/* eslint-disable */

import { GET_BLOG_POSTS }  from '@globals/data'
import { getServerClient } from '@globals/data/apollo'

const generateStaticParams = async () => {
  const getCleanedUriString = (rawUriString: string) => rawUriString.split('/')[1]

  const getBlogPostUris = (posts: Array<any>) =>
    posts.map(({ uri }: { uri: string }) => ({
      uri: getCleanedUriString(uri),
    }))

  const client = getServerClient()

  const {
    data: {
      posts: { nodes: posts },
    },
  } = await client.query({ query: GET_BLOG_POSTS })

  return getBlogPostUris(posts)
}

export { generateStaticParams }
