'use client'

import type { IndexPageProps }     from './index-page.interfaces.js'

import React                       from 'react'

import { getSiteIndexPageSeoData } from '@globals/data'

import { IndexPageClient }         from './index-page.client.js'
import { IndexPageServer }         from './index-page.server.js'

const IndexPage: IndexPageProps = () => {
  const seoData = getSiteIndexPageSeoData()
  console.log(seoData)
  // const indexPageData = await IndexPageServer()
  return <IndexPageClient {...indexPageData} />
}

export default IndexPage
