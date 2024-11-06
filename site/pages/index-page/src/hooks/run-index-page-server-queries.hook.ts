/* eslint-disable */

import { GET_CONTACTS }              from '@globals/data'
import { GET_SERVICES }              from '@globals/data'
import { GET_BLOG_POSTS }            from '@globals/data'
import { GET_WORK_RESULTS }          from '@globals/data'
import { GET_UI }                    from '@globals/data'
import { GET_FRAGMENTS }             from '@globals/data'
import { GET_NAVIGATION }            from '@globals/data'
import { GET_AVAILABLE_RADII }       from '@globals/data'
import { GET_CAR_BODIES }            from '@globals/data'
import { getAqsiDataFromLocalRoute } from '@globals/data'
import { getServerClient }           from '@globals/data/apollo'

export const runIndexPageServerQueries = async () => {
  const client = getServerClient()

  await Promise.allSettled([
    client.query({ query: GET_CONTACTS }),
    client.query({ query: GET_SERVICES }),
    client.query({ query: GET_BLOG_POSTS }),
    client.query({ query: GET_WORK_RESULTS }),
    client.query({ query: GET_UI }),
    client.query({ query: GET_FRAGMENTS }),
    client.query({ query: GET_NAVIGATION }),
    client.query({ query: GET_AVAILABLE_RADII }),
    client.query({ query: GET_CAR_BODIES }),
  ])

  const aqsiServicesData = await getAqsiDataFromLocalRoute()
  return { aqsiServicesData }
}
