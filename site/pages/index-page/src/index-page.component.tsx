import type { FC }                   from 'react'

import React                         from 'react'
import { memo }                      from 'react'

import { IndexPageClient }           from './index-page.client.js'
import { runIndexPageServerQueries } from './hooks/run-index-page-server-queries.hook.js'

const IndexPage: FC = async () => {
  const serverQueryData = await runIndexPageServerQueries()
  // @ts-expect-error not assignable
  return <IndexPageClient serverQueryData={serverQueryData} />
}

export default memo(IndexPage)
