import { GET_PREVIEW }   from '@globals/data'
import { getClient }     from '@globals/data'

import { GET_INDEX_SEO } from '../queries'

export const getSeo = async () => {
  const client = getClient()

  let SEO

  const { data: seoData } = await client.query({
    query: GET_INDEX_SEO,
  })

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.pageBy.seo
  } else SEO = {}

  return { SEO, ogCover }
}
