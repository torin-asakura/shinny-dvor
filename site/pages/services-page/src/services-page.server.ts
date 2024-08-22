import type { ServicesPageServerProps }   from './services-page.interface.js'
import type { SEOInt }                    from '@globals/data'

import { runAvailableRadiiQuery }         from '@globals/data'
import { runNavigationQuery }             from '@globals/data'
import { runContactsQuery }               from '@globals/data'
import { runFragmentsQuery }              from '@globals/data'
import { runPostsQuery }                  from '@globals/data'
import { runCarBodiesQuery }              from '@globals/data'
import { runServicesQuery }               from '@globals/data'
import { runGetSiteServicesPageSeoQuery } from '@globals/data'
import { runGetPreviewQuery }             from '@globals/data'

export const ServicesPageServer: ServicesPageServerProps = async () => {
  let SEO: SEOInt

  const seoData = await runGetSiteServicesPageSeoQuery()
  const previewData = await runGetPreviewQuery()

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.pages.nodes[0].seo
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
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { SEO, ogCover, data }
}
