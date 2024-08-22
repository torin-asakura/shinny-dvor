import { GET_CONTACTS_SEO } from '@globals/data'
import { getClient }        from '@globals/data'

const rungGetSiteContactsPageQuery = async () => {
  const client = getClient()

  const { data: seoData } = await client.query({
    query: GET_CONTACTS_SEO,
  })

  return seoData
}

export { rungGetSiteContactsPageQuery }
