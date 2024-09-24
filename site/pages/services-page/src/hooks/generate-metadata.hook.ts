import { GET_SITE_SERVICES_PAGE_SEO } from '@globals/data'
import { GET_PREVIEW }                from '@globals/data'
import { getSeoMetadata }             from '@globals/data'
import { getServerClient }            from '@globals/data/apollo'

const generateMetadata = async () => {
  const client = getServerClient()

  const { data: seoQueryData } = await client.query({ query: GET_SITE_SERVICES_PAGE_SEO })
  const seoData = seoQueryData.pages.nodes[0].seo

  const {
    data: {
      mediaItemBy: { sourceUrl: ogCover },
    },
  } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  return getSeoMetadata({ ogCover, seoData })
}

export { generateMetadata }
