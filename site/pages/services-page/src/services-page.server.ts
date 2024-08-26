import type { ServicesPageServerProps } from './services-page.interface.js'
import type { SEOInt }                  from '@globals/data'

import { getAvailableRadiiData }        from '@globals/data/getters'
import { getNavigationData }            from '@globals/data/getters'
import { getContactsData }              from '@globals/data/getters'
import { getFragmentsData }             from '@globals/data/getters'
import { getPostsData }                 from '@globals/data/getters'
import { getCarBodiesData }             from '@globals/data/getters'
import { getServicesData }              from '@globals/data/getters'
import { getSiterServicesPageSeoData }  from '@globals/data/getters'
import { getPagePreviewData }           from '@globals/data/getters'

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
