import type { SEOInt }                  from '@globals/data'

import type { ContactsPageServerProps } from './contacts-page.interfaces.js'

import { getContactsData }              from '@globals/data'
import { getNavigationData }            from '@globals/data'
import { getCarBodiesData }             from '@globals/data'
import { getFragmentsData }             from '@globals/data'
import { getServicesData }              from '@globals/data'
import { getAvailableRadiiData }        from '@globals/data'
import { getSiteContactsPageSeoData }   from '@globals/data'
import { getPagePreviewData }           from '@globals/data'

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
