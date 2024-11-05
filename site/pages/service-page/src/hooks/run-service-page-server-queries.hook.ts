import type { ServicePageServerProps } from '../service-page.interfaces.js'

import { GET_CONTACTS }                from '@globals/data'
import { GET_BLOG_POSTS }              from '@globals/data'
import { GET_NAVIGATION }              from '@globals/data'
import { GET_AVAILABLE_RADII }         from '@globals/data'
import { GET_SERVICES }                from '@globals/data'
import { GET_FRAGMENTS }               from '@globals/data'
import { GET_CAR_BODIES }              from '@globals/data'
import { GET_SERVICE_BY }              from '@globals/data'
import { getAqsiDataFromLocalRoute }   from '@globals/data'
import { getServerClient }             from '@globals/data/apollo'

// @ts-expect-error any type
export const runServicePageServerQueries: ServicePageServerProps = async ({ params }) => {
  const { uri } = params
  const client = getServerClient()

  await client.query({ query: GET_CONTACTS })
  await client.query({ query: GET_BLOG_POSTS })
  await client.query({ query: GET_NAVIGATION })
  await client.query({ query: GET_AVAILABLE_RADII })
  await client.query({ query: GET_SERVICES })
  await client.query({ query: GET_FRAGMENTS })
  await client.query({ query: GET_CAR_BODIES })
  await client.query({ query: GET_SERVICE_BY, variables: { uri } })

  const aqsiServicesData = await getAqsiDataFromLocalRoute()
  return { aqsiServicesData }
}
