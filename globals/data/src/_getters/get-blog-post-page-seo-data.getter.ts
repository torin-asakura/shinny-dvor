import { GET_BLOG_POST_PAGE_SEO } from '@globals/data'
import { getClient }              from '@globals/data'

const getBlogPostPageSeoData = async ({ uri }: { uri: string }) => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_BLOG_POST_PAGE_SEO,
    variables: { uri },
  })

  if (data) {
    return {
      postBy: data.postBy,
    }
  }

  return { postBy: [] }
}

export { getBlogPostPageSeoData }
