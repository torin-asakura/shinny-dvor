import type { ServicePageProps } from './service-page.interfaces.js'

import React                     from 'react'

import { ServicePageClient }     from './service-page.client.js'
import { ServicePageServer }     from './service-page.server.js'

const ServicePage: ServicePageProps = async ({ params }) => {
  console.log('service page')
  const servicePageData = await ServicePageServer({ params })
  return <ServicePageClient {...servicePageData} />
}

export default ServicePage
