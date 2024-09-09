import { GET_BLOG_POSTS }  from '@globals/data'
import { getServerClient } from '@globals/data'

const generateStaticParams = async () => {
  const getCleanedUriString = (rawUriString: string) => {
    return rawUriString.split('/')[1]
  }

  const getBlogPostUris = (posts: any[]) => {
    return posts.map(({ uri }: { uri: string }) => ({
      uri: getCleanedUriString(uri),
    }))
  }

  const client = getServerClient()

  const {
    data: {
      posts: { nodes: posts },
    },
  } = await client.query({ query: GET_BLOG_POSTS })

  return getBlogPostUris(posts)
}

export { generateStaticParams }
