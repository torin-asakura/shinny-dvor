import { GET_POST_SEO } from '@globals/data'
import { getClient }    from '@globals/data'

const runGetBlogPostSeoQuery = async ({ uri }: { uri: string }) => {
  const client = getClient()

  const { data: seoData } = await client.query({
    query: GET_POST_SEO,
    variables: { uri },
  })

  return seoData
}

export { runGetBlogPostSeoQuery }
