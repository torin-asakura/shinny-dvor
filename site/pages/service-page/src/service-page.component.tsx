import type { ServicePageProps }       from './service-page.interfaces.js'

import React                           from 'react'

import { ServicePageClient }           from './service-page.client.js'
import { runServicePageServerQueries } from './hooks/index.js'

const ServicePage: ServicePageProps = async ({ params }) => {
  const serverQueryData = await runServicePageServerQueries({ params })
  // @ts-expect-error param is not assignable
  return <ServicePageClient params={params} serverQueryData={serverQueryData} />
}

export default ServicePage
