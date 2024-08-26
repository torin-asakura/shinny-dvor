import type { ServicePageServerProps } from './service-page.interfaces.js'
import type { SEOInt }                 from '@globals/data'

import { getAvailableRadiiData }       from '@globals/data/getters'
import { getPostsData }                from '@globals/data/getters'
import { getNavigationData }           from '@globals/data/getters'
import { getContactsData }             from '@globals/data/getters'
import { getFragmentsData }            from '@globals/data/getters'
import { getPostData }                 from '@globals/data/getters'
import { getCarBodiesData }            from '@globals/data/getters'
import { getServiceData }              from '@globals/data/getters'
import { getServicesData }             from '@globals/data/getters'
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
    getContactsData(),
    getPostsData(),
    getNavigationData(),
    getAvailableRadiiData(),
    getServicesData(),
    getFragmentsData(),
    getCarBodiesData(),
    getServiceData(uri),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { SEO, ogCover, data }
}
