import type { ServicePageProps }       from './service-page.interfaces.js'

import React                           from 'react'

import { GET_SERVICE_BY }              from '@globals/data'
import { PreloadQuery }                from '@globals/data'

import { ServicePageClient }           from './service-page.client.js'
import { runServicePageServerQueries } from './hooks/index.js'

const ServicePage: ServicePageProps = async ({ params }) => {
  const serverQueryData = await runServicePageServerQueries({ params })
  const { uri } = params
  return (
    <PreloadQuery
      query={GET_SERVICE_BY}
      variables={{
        uri,
      }}
    >
      <ServicePageClient
        // @ts-expect-error params is not assignable
        params={params}
        serverQueryData={serverQueryData}
      />
    </PreloadQuery>
  )
}

export default ServicePage
