import { GET_SITE_SERVICE_PAGE_SEO } from '@globals/data'
import { getClient }                 from '@globals/data'

const getSiteServicePageSeoData = async ({ uri }: { uri: string }) => {
  const client = getClient()

  const { data: seoData } = await client.query({
    query: GET_SITE_SERVICE_PAGE_SEO,
    variables: { uri },
  })

  return seoData
}

export { getSiteServicePageSeoData }
