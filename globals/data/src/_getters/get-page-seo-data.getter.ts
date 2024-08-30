import { GET_PAGE_SEO } from '@globals/data'
import { getClient }    from '@globals/data'

const getPageSeoData = async ({ uri }: { uri: string }) => {
  const client = getClient()

  const { data: seoData } = await client.query({
    query: GET_PAGE_SEO,
    variables: { uri },
  })

  return seoData
}

export { getPageSeoData }
