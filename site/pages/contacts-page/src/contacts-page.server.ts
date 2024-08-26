import type { ContactsPageServerProps } from './contacts-page.interfaces.js'
import type { SEOInt }                  from '@globals/data'

import { getContactsData }              from '@globals/data/getters'
import { getNavigationData }            from '@globals/data/getters'
import { getCarBodiesData }             from '@globals/data/getters'
import { getFragmentsData }             from '@globals/data/getters'
import { getServicesData }              from '@globals/data/getters'
import { getAvailableRadiiData }        from '@globals/data/getters'
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
    getFragmentsData(),
    getContactsData(),
    getNavigationData(),
    getAvailableRadiiData(),
    getCarBodiesData(),
    getServicesData(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { ogCover, SEO, data }
}
