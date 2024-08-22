import { GET_INDEX_SEO } from '@globals/data'
import { getClient }     from '@globals/data'

const getSiteIndexPageSeoData = async () => {
  const client = getClient()
  const { data: seoData } = await client.query({
    query: GET_INDEX_SEO,
  })

  return seoData
}

export { getSiteIndexPageSeoData }
