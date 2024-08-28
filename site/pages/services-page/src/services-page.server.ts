import type { SEOInt }                  from '@globals/data'

import type { ServicesPageServerProps } from './services-page.interface.js'

import { getAvailableRadiiData }        from '@globals/data'
import { getNavigationData }            from '@globals/data'
import { getContactsData }              from '@globals/data'
import { getFragmentsData }             from '@globals/data'
import { getPostsData }                 from '@globals/data'
import { getCarBodiesData }             from '@globals/data'
import { getServicesData }              from '@globals/data'
import { getSiterServicesPageSeoData }  from '@globals/data'
import { getPagePreviewData }           from '@globals/data'

export const ServicesPageServer: ServicesPageServerProps = async () => {
  let SEO: SEOInt

  const seoData = await getSiterServicesPageSeoData()
  const previewData = await getPagePreviewData()

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.pages.nodes[0].seo
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
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { SEO, ogCover, data }
}
