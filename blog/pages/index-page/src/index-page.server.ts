import type { IndexPageServerProps } from './index-page.interfaces.js'
import type { SEOInt }               from '@globals/data'

import { getAvailableRadiiData }     from '@globals/data'
import { getCarBodiesData }          from '@globals/data'
import { getServicesData }           from '@globals/data'
import { getFragmentsData }          from '@globals/data'
import { getContactsData }           from '@globals/data'
import { getNavigationData }         from '@globals/data'
import { getPostsData }              from '@globals/data'
import { getPagePreviewData }        from '@globals/data'
import { getBlogIndexPageSeoData }   from '@globals/data'

// import { getPageSeoData }            from '@globals/data'

export const IndexPageServer: IndexPageServerProps = async () => {
  let SEO: SEOInt

  const seoData = await getBlogIndexPageSeoData()
  // const seoData = await getPageSeoData({ uri: '/blog' })

  const previewData = await getPagePreviewData()

  // TODO move it to blogindespagegetseodata getter
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
    getFragmentsData(),
    getCarBodiesData(),
    getServicesData(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { ogCover, SEO, data }
}
