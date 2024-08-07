
import React               from 'react'
import { FC }              from 'react'

		import { IndexPageClient } from './index-page.client.js'
import { IndexPageServer } from './index-page.server.js'

// TODO interface
const IndexPage: FC<IndexPageProps> = async () => {
  const indexPageData = await IndexPageServer()
  return <IndexPageClient {...indexPageData} />
}

export default IndexPage
