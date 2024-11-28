import type { ServicesPageProps }       from './services-page.interface.js'

import React                            from 'react'

import { ServicesPageClient }           from './services-page.client.js'
import { runServicesPageServerQueries } from './hooks/index.js'

const ServicesPage: ServicesPageProps = async () => {
  const { servicesDataToReplace } = await runServicesPageServerQueries()
  // @ts-expect-error incorrect types
  return <ServicesPageClient servicesDataToReplace={servicesDataToReplace} />
}

export default ServicesPage
