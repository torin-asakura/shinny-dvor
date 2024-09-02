import type { IndexPageServerProps } from './index-page.interfaces.js'

import { GET_SITE_INDEX_PAGE_SEO }   from '@globals/data'
import { getServerClient }           from '@globals/data'
import { getContactsData }           from '@globals/data'
import { getServicesData }           from '@globals/data'
import { getBlogPostsData }          from '@globals/data'
import { getWorkResultsData }        from '@globals/data'
import { getUiData }                 from '@globals/data'
import { getFragmentsData }          from '@globals/data'
import { getNavigationData }         from '@globals/data'
import { getAvailableRadiiData }     from '@globals/data'
import { getCarBodiesData }          from '@globals/data'
import { getSiteIndexPageSeoData }   from '@globals/data'
import { getPagePreviewData }        from '@globals/data'

export const IndexPageServer: IndexPageServerProps = async () => {
  // let SEO: SEOInt
  //
  const client = getServerClient()

  const { data } = await client.query({
    query: GET_SITE_INDEX_PAGE_SEO,
  })

  // // TODO context
  // const context = ''
  // // const context = { headers: { cookie } }
  //
  // const seoData = await getSiteIndexPageSeoData(client, context)
  // const previewData = await getPagePreviewData(client, context)
  //
  // const ogCover = previewData?.mediaItemBy.sourceUrl
  //
  // if (seoData) {
  //   SEO = seoData.pageBy.seo
  // } else {
  //   SEO = {}
  // }
  //
  // const queryPromises: Array<Promise<any>> = [
  //   getContactsData(client, context),
  //   getBlogPostsData(client, context),
  //   getNavigationData(client, context),
  //   getAvailableRadiiData(client, context),
  //   getServicesData(client, context),
  //   getFragmentsData(client, context),
  //   getUiData(client, context),
  //   getWorkResultsData(client, context),
  //   getCarBodiesData(client, context),
  // ]
  //
  // const retrievedData = await Promise.all(queryPromises)
  //
  // const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  // return { SEO, ogCover, data }
  return
}
