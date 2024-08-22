import { GET_CONTACTS_SEO } from '@globals/data'
import { getClient }        from '@globals/data'

const getSiteContactsPageSeoData = async () => {
  const client = getClient()

  const { data: seoData } = await client.query({
    query: GET_CONTACTS_SEO,
  })

  return seoData
}

export { getSiteContactsPageSeoData }
