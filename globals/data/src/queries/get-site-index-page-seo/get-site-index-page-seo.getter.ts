import { GET_SITE_INDEX_PAGE_SEO } from './get-site-index-page-seo.query.js'

const getSiteIndexPageSeoData = async (client, context) => {
  const { data } = await client.query({
    query: GET_SITE_INDEX_PAGE_SEO,
    context,
  })

  return data
}

export { getSiteIndexPageSeoData }
