import { GET_SITE_INDEX_PAGE_SEO } from '@globals/data'
import { getClient }               from '@globals/data'

const getSiteIndexPageSeoData = async () => {
  const client = getClient()
  const { data: seoData } = await client.query({
    query: GET_SITE_INDEX_PAGE_SEO,
  })

  return seoData
}

export { getSiteIndexPageSeoData }
