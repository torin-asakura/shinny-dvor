import type { IndexPageProps }     from './index-page.interfaces.js'
import type { FC }                 from 'react'

import React                       from 'react'

import { GET_SITE_INDEX_PAGE_SEO } from '@globals/data'
import { getServerClient }         from '@globals/data'

const IndexPage: FC<IndexPageProps> = async () => {
  const client = getServerClient()

  const { data } = await client.query({
    query: GET_SITE_INDEX_PAGE_SEO,
    // context,
  })

  console.log(data)
  // const seoData = getSiteIndexPageSeoData()
  // const indexPageData = await IndexPageServer()
  // return <IndexPageClient {...indexPageData} />
}

export default IndexPage
