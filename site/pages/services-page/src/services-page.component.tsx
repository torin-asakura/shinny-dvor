import type { ServicesPageProps }       from './services-page.interface.js'

import React                            from 'react'

import { ServicesPageClient }           from './services-page.client.js'
import { runServicesPageServerQueries } from './hooks/index.js'

const ServicesPage: ServicesPageProps = async () => {
  const { aqsiServicesData } = await runServicesPageServerQueries()
  // @ts-expect-error incorrect types
  return <ServicesPageClient aqsiServicesData={aqsiServicesData} />
}

export default ServicesPage
