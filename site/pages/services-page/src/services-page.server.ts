import { GET_PREVIEW }            from '@globals/data'
import { getClient }              from '@globals/data'
import { runAvailableRadiiQuery } from '@globals/data'
import { setCacheHeader }         from '@globals/data'
import { runNavigationQuery }     from '@globals/data'
import { runContactsQuery }       from '@globals/data'
import { runFragmentsQuery }      from '@globals/data'
import { runPostsQuery }          from '@globals/data'
import { runCarBodiesQuery }      from '@globals/data'
import { runServicesQuery }       from '@globals/data'

import { GET_SERVICES_SEO }       from './queries'

// TODO interfaces
export const ServicesPageServer = async () => {
  const client = getClient()

  let SEO

  // TODO just do it
  // setCacheHeader(res, 3600, 300)

  const { data: seoData } = await client.query({
    query: GET_SERVICES_SEO,
  })

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.pages.nodes[0].seo
  } else SEO = {}

  const queryPromises: Array<Promise<any>> = [
    runContactsQuery(),
    runPostsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runServicesQuery(),
    runFragmentsQuery(),
    runCarBodiesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { SEO, ogCover, data }
}
