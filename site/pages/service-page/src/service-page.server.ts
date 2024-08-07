import { GET_PREVIEW }            from '@globals/data'
import { getClient }              from '@globals/data'
import { runAvailableRadiiQuery } from '@globals/data'
import { setCacheHeader }         from '@globals/data'
import { runNavigationQuery }     from '@globals/data'
import { runContactsQuery }       from '@globals/data'
import { runFragmentsQuery }      from '@globals/data'
import { runPostsQuery }          from '@globals/data'
import { runCarBodiesQuery }      from '@globals/data'
import { runServiceQuery }        from '@globals/data'
import { runServicesQuery }       from '@globals/data'

import { GET_SERVICE_SEO }        from './queries'

// TODO interface
export const ServicePageServer = async ({ params, res }) => {
  const client = getClient()

  let SEO

  const { uri } = params

  // TODO
  // setCacheHeader(res, 3600, 300)

  const { data: seoData } = await client.query({
    query: GET_SERVICE_SEO,
    variables: { uri },
  })

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.serviceBy.seo
  } else SEO = {}

  const queryPromises: Array<Promise<any>> = [
    runContactsQuery(),
    runPostsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runServicesQuery(),
    runFragmentsQuery(),
    runCarBodiesQuery(),
    runServiceQuery(uri),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { SEO, ogCover, data }
}
