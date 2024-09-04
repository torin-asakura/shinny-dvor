import { GET_SITE_CONTACTS_PAGE_SEO } from '@globals/data'
import { getClient }                  from '@globals/data'

const getSiteContactsPageSeoData = async () => {
  const client = getClient()

  const { data: seoData } = await client.query({
    query: GET_SITE_CONTACTS_PAGE_SEO,
  })

  return seoData
}

export { getSiteContactsPageSeoData }
