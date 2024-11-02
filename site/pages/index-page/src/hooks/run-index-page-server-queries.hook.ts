/* eslint-disable */

import { GET_CONTACTS }         from '@globals/data'
import { GET_SERVICES }         from '@globals/data'
import { GET_BLOG_POSTS }       from '@globals/data'
import { GET_WORK_RESULTS }     from '@globals/data'
import { GET_UI }               from '@globals/data'
import { GET_FRAGMENTS }        from '@globals/data'
import { GET_NAVIGATION }       from '@globals/data'
import { GET_AVAILABLE_RADII }  from '@globals/data'
import { GET_CAR_BODIES }       from '@globals/data'
import { getAqsiData }          from '@globals/data'
import { formatAqsiDataHelper } from '@globals/data'
import { getServerClient }      from '@globals/data/apollo'

export const runIndexPageServerQueries = async () => {
  const client = getServerClient()

  await client.query({ query: GET_CONTACTS })
  await client.query({ query: GET_SERVICES })
  await client.query({ query: GET_BLOG_POSTS })
  await client.query({ query: GET_WORK_RESULTS })
  await client.query({ query: GET_UI })
  await client.query({ query: GET_FRAGMENTS })
  await client.query({ query: GET_NAVIGATION })
  await client.query({ query: GET_AVAILABLE_RADII })
  await client.query({ query: GET_CAR_BODIES })

  const aqsiData = await getAqsiData()
  const formattedAqsiData = formatAqsiDataHelper(aqsiData)
  return { aqsiServicesData: formattedAqsiData }
}
