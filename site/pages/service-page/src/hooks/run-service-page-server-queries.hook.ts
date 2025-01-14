import type { ServicesDataToReplaceType } from '@globals/data'

import type { PropsType }                 from '../service-page.interfaces.js'

import { GET_CONTACTS }                   from '@globals/data'
import { GET_BLOG_POSTS }                 from '@globals/data'
import { GET_NAVIGATION }                 from '@globals/data'
import { GET_AVAILABLE_RADII }            from '@globals/data'
import { GET_SERVICES }                   from '@globals/data'
import { GET_FRAGMENTS }                  from '@globals/data'
import { GET_CAR_BODIES }                 from '@globals/data'
import { GET_SERVICE_BY }                 from '@globals/data'
import { getAqsiData }                    from '@globals/data'
import { getServerClient }                from '@globals/data/apollo'

export const runServicePageServerQueries = async ({
  params,
}: PropsType): Promise<{ servicesDataToReplace: ServicesDataToReplaceType }> => {
  const { uri } = params
  const client = getServerClient()

  await Promise.allSettled([
    client.query({ query: GET_CONTACTS }),
    client.query({ query: GET_BLOG_POSTS }),
    client.query({ query: GET_NAVIGATION }),
    client.query({ query: GET_AVAILABLE_RADII }),
    client.query({ query: GET_SERVICES }),
    client.query({ query: GET_FRAGMENTS }),
    client.query({ query: GET_CAR_BODIES }),
    client.query({ query: GET_SERVICE_BY, variables: { uri } }),
  ])

  const aqsiServicesData = await getAqsiData()
  return { servicesDataToReplace: aqsiServicesData }
}
