import React                             from 'react'
import { memo }                          from 'react'

import { IndexPageClient }               from './index-page.client.js'
import { runBlogIndexPageServerQueries } from './hooks/index.js'

const IndexPage = async () => {
  const serverQueryData = await runBlogIndexPageServerQueries()
  // @ts-expect-error not assignable
  return <IndexPageClient serverQueryData={serverQueryData} />
}

export default memo(IndexPage)
