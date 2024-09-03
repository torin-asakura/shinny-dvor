import type { IndexPageProps }       from './index-page.interfaces.js'
import type { FC }                   from 'react'

import React                         from 'react'
import { memo }                      from 'react'

import { IndexPageClient }           from './index-page.client.js'
import { runIndexPageServerQueries } from './hooks/run-index-page-server-queries.hook.js'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const IndexPage: FC<IndexPageProps> = async () => {
  await runIndexPageServerQueries()
  return <IndexPageClient />
}

export default memo(IndexPage)
