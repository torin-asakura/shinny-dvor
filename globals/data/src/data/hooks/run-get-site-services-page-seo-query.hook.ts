import { GET_SERVICES_SEO } from '@globals/data'
import { getClient }        from '@globals/data'

const runGetSiteServicesPageSeoQuery = async () => {
  const client = getClient()

  const { data: seoData } = await client.query({
    query: GET_SERVICES_SEO,
  })

  return seoData
}

export { runGetSiteServicesPageSeoQuery }
