import type { ContactsPageServerProps } from './contacts-page.interfaces.js'
import type { SEOInt }                  from '@globals/data'

import { runAvailableRadiiQuery }       from '@globals/data'
import { runContactsQuery }             from '@globals/data'
import { runNavigationQuery }           from '@globals/data'
import { runCarBodiesQuery }            from '@globals/data'
import { runFragmentsQuery }            from '@globals/data'
import { runServicesQuery }             from '@globals/data'
import { getSiteContactsPageSeoData }   from '@globals/data/getters'
import { getPagePreviewData }           from '@globals/data/getters'

export const ContactsPageServer: ContactsPageServerProps = async () => {
  let SEO: SEOInt

  const previewData = await getPagePreviewData()
  const seoData = await getSiteContactsPageSeoData()

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.pageBy.seo
  } else {
    SEO = {}
  }

  const queryPromises: Array<Promise<any>> = [
    runFragmentsQuery(),
    runContactsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runCarBodiesQuery(),
    runServicesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { ogCover, SEO, data }
}
