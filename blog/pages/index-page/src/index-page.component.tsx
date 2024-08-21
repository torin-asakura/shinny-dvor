import React               from 'react'

import { IndexPageClient } from './index-page.client.js'
import { IndexPageServer } from './index-page.server.js'

export const IndexPage = async () => {
  const indexPageData = await IndexPageServer()
  return <IndexPageClient {...indexPageData} />
}
