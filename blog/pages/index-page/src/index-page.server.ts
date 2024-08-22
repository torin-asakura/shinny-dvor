import type { IndexPageServerProps } from './index-page.interfaces.js'
import type { SEOInt }               from '@globals/data'

import { runAvailableRadiiQuery }    from '@globals/data'
import { runCarBodiesQuery }         from '@globals/data'
import { runServicesQuery }          from '@globals/data'
import { runFragmentsQuery }         from '@globals/data'
import { runContactsQuery }          from '@globals/data'
import { runNavigationQuery }        from '@globals/data'
import { runPostsQuery }             from '@globals/data'
import { runGetBlogSeoQuery }        from '@globals/data'
import { runGetPreviewQuery }        from '@globals/data'

export const IndexPageServer: IndexPageServerProps = async () => {
  let SEO: SEOInt

  const seoData = await runGetBlogSeoQuery()
  const previewData = await runGetPreviewQuery()

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.pageBy.seo
  } else {
    SEO = {}
  }

  const queryPromises: Array<Promise<any>> = [
    runContactsQuery(),
    runPostsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runFragmentsQuery(),
    runCarBodiesQuery(),
    runServicesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { ogCover, SEO, data }
}
