import type { IndexPageProps } from './index-page.interfaces.js'
import type { FC }             from 'react'

import React                   from 'react'
import { memo }                from 'react'

import { IndexPageClient }     from './index-page.client.js'
import { IndexPageServer }     from './index-page.server.js'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const IndexPage: FC<IndexPageProps> = async () => {
  const indexPageData = await IndexPageServer()
  // return <IndexPageClient {...indexPageData} />
  return <IndexPageClient />
}

export default memo(IndexPage)
