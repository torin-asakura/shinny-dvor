import type { IndexPageServerProps } from './index-page.interfaces.js'
import type { SEOInt }               from '@globals/data'

import { getContactsData }           from '@globals/data/getters'
import { getServicesData }           from '@globals/data/getters'
import { getPostsData }              from '@globals/data/getters'
import { getWorkResultsData }        from '@globals/data/getters'
import { getUiData }                 from '@globals/data/getters'
import { getFragmentsData }          from '@globals/data/getters'
import { getNavigationData }         from '@globals/data/getters'
import { getAvailableRadiiData }     from '@globals/data/getters'
import { getCarBodiesData }          from '@globals/data/getters'
import { getSiteIndexPageSeoData }   from '@globals/data/getters'
import { getPagePreviewData }        from '@globals/data/getters'

export const IndexPageServer: IndexPageServerProps = async () => {
  let SEO: SEOInt

  const seoData = await getSiteIndexPageSeoData()
  const previewData = await getPagePreviewData()

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.pageBy.seo
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
    getUiData(),
    getWorkResultsData(),
    getCarBodiesData(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { SEO, ogCover, data }
}
