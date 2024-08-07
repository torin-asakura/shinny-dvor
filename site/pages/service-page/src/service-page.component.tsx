import React                 from 'react'
import { FC }                from 'react'

import { ServicePageClient } from './service-page.client.js'
import { ServicePageServer } from './service-page.server.js'

// TODO interface
const ServicePage: FC<ServicePageProps> = async ({ params }) => {
  console.log('service page')
  const servicePageData = await ServicePageServer({ params })
  return <ServicePageClient {...servicePageData} />
}

export default ServicePage
