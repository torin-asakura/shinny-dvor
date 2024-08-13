import type { ContactsPageServerProps } from './contacts-page.interfaces.js'
import type { SEOInt }                  from '@globals/data'

import { GET_PREVIEW }                  from '@globals/data'
import { getClient }                    from '@globals/data'
import { runAvailableRadiiQuery }       from '@globals/data'
import { setCacheHeader }               from '@globals/data'
import { runContactsQuery }             from '@globals/data'
import { runNavigationQuery }           from '@globals/data'
import { runCarBodiesQuery }            from '@globals/data'
import { runFragmentsQuery }            from '@globals/data'
import { runServicesQuery }             from '@globals/data'

import { GET_CONTACTS_SEO }             from './queries/index.js'

export const ContactsPageServer: ContactsPageServerProps = async () => {
  const client = getClient()

  let SEO: SEOInt

  const { data: seoData } = await client.query({
    query: GET_CONTACTS_SEO,
  })

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.pageBy.seo
  } else SEO = {}

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
