import type { ServicesPageProps }       from './services-page.interface.js'

import React                            from 'react'

import { ServicesPageClient }           from './services-page.client.js'
import { runServicesPageServerQueries } from './hooks/index.js'

const ServicesPage: ServicesPageProps = async () => {
  const serverQueryData = await runServicesPageServerQueries()
  return <ServicesPageClient serverQueryData={serverQueryData} />
}

export default ServicesPage
