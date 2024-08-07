import React                  from 'react'
import { FC }                 from 'react'

import { ServicesPageClient } from './services-page.client.js'
import { ServicesPageServer } from './services-page.server.js'

// TODO interface
const ServicesPage: FC<ServicesPageProps> = async () => {
  const servicesPageData = await ServicesPageServer()
  return <ServicesPageClient {...servicesPageData} />
}

export default ServicesPage
