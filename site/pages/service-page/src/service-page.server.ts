import type { SEOInt }                 from '@globals/data'

import type { ServicePageServerProps } from './service-page.interfaces.js'

import { getAvailableRadiiData }       from '@globals/data'
import { getPostsData }                from '@globals/data'
import { getNavigationData }           from '@globals/data'
import { getContactsData }             from '@globals/data'
import { getFragmentsData }            from '@globals/data'
import { getPostData }                 from '@globals/data'
import { getCarBodiesData }            from '@globals/data'
import { getServiceData }              from '@globals/data'
import { getServicesData }             from '@globals/data'
import { getSiteServicePageSeoData }   from '@globals/data'
import { getPagePreviewData }          from '@globals/data'

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
