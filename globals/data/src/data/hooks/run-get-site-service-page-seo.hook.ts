import { GET_SERVICE_SEO } from '@globals/data'
import { getClient }       from '@globals/data'

const runGetSiteServicePageSeoQuery = async ({ uri }: { uri: string }) => {
  const client = getClient()
  const { data: seoData } = await client.query({
    query: GET_SERVICE_SEO,
    variables: { uri },
  })

  return seoData
}

export { runGetSiteServicePageSeoQuery }
