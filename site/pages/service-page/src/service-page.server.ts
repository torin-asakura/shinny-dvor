import type { ServicePageServerProps } from './service-page.interfaces.js'
import type { SEOInt }                 from '@globals/data'

import { runAvailableRadiiQuery }      from '@globals/data'
import { runNavigationQuery }          from '@globals/data'
import { runContactsQuery }            from '@globals/data'
import { runFragmentsQuery }           from '@globals/data'
import { runPostsQuery }               from '@globals/data'
import { runCarBodiesQuery }           from '@globals/data'
import { runServiceQuery }             from '@globals/data'
import { runServicesQuery }            from '@globals/data'
import { getSiteServicePageSeoData }   from '@globals/data/getters'
import { getPagePreviewData }          from '@globals/data/getters'

export const ServicePageServer: ServicePageServerProps = async ({ params }) => {
  let SEO: SEOInt

  const { uri } = params

  const seoData = await getSiteServicePageSeoData({ uri })
  const previewData = await getPagePreviewData()

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.serviceBy.seo
  } else {
    SEO = {}
  }

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
