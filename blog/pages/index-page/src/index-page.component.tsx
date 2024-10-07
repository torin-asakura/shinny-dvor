/* eslint-disable */

import { memo }                          from 'react'
import React                             from 'react'

import { IndexPageClient }               from './index-page.client.js'
import { runBlogIndexPageServerQueries } from './hooks/index.js'

const IndexPage = async () => {
  await runBlogIndexPageServerQueries()
  // @ts-expect-error not assignable
  return <IndexPageClient />
}

export default memo(IndexPage)
