import type { IndexPageServerProps } from './index-page.interfaces.js'
import type { SEOInt }               from '@globals/data'

import { getAvailableRadiiData }     from '@globals/data/getters'
import { getCarBodiesData }          from '@globals/data/getters'
import { getServicesData }           from '@globals/data/getters'
import { getFragmentsData }          from '@globals/data/getters'
import { getContactsData }           from '@globals/data/getters'
import { getNavigationData }         from '@globals/data/getters'
import { getPostsData }              from '@globals/data/getters'
import { getPagePreviewData }        from '@globals/data/getters'
import { getBlogIndexPageSeoData }   from '@globals/data/getters'

// import { getPageSeoData }            from '@globals/data/getters'

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
