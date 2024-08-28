import type { SEOInt }               from '@globals/data'

import type { IndexPageServerProps } from './index-page.interfaces.js'

import { getContactsData }           from '@globals/data'
import { getServicesData }           from '@globals/data'
import { getPostsData }              from '@globals/data'
import { getWorkResultsData }        from '@globals/data'
import { getUiData }                 from '@globals/data'
import { getFragmentsData }          from '@globals/data'
import { getNavigationData }         from '@globals/data'
import { getAvailableRadiiData }     from '@globals/data'
import { getCarBodiesData }          from '@globals/data'
import { getSiteIndexPageSeoData }   from '@globals/data'
import { getPagePreviewData }        from '@globals/data'

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
