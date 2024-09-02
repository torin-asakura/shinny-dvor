'use client'

import type { IndexPageProps } from './index-page.interfaces.js'

import React                   from 'react'

import { IndexPageClient }     from './index-page.client.js'
import { IndexPageServer }     from './index-page.server.js'

const IndexPage: IndexPageProps = async () => {
  const indexPageData = await IndexPageServer()
  return <IndexPageClient {...indexPageData} />
}

export default IndexPage
