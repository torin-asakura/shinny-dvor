import type { IndexPageServerProps } from './index-page.interfaces.js'
import type { SEOInt }               from '@globals/data'

import { runCarBodiesQuery }         from '@globals/data'
import { runAvailableRadiiQuery }    from '@globals/data'
import { runNavigationQuery }        from '@globals/data'
import { runFragmentsQuery }         from '@globals/data'
import { runContactsQuery }          from '@globals/data'
import { runUiQuery }                from '@globals/data'
import { runServicesQuery }          from '@globals/data'
import { runPostsQuery }             from '@globals/data'
import { runWorkResultsQuery }       from '@globals/data'
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
    runContactsQuery(),
    runPostsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runServicesQuery(),
    runFragmentsQuery(),
    runUiQuery(),
    runWorkResultsQuery(),
    runCarBodiesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { SEO, ogCover, data }
}
