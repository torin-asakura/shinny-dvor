import type { ServicesPageProps } from './services-page.interface.js'

import React                      from 'react'

import { ServicesPageClient }     from './services-page.client.js'
import { ServicesPageServer }     from './services-page.server.js'

const ServicesPage: ServicesPageProps = async () => {
  const servicesPageData = await ServicesPageServer()
  return <ServicesPageClient {...servicesPageData} />
}

export default ServicesPage
