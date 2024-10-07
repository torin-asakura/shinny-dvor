/* eslint-disable */

import { GET_CONTACTS }        from '@globals/data'
import { GET_NAVIGATION }      from '@globals/data'
import { GET_CAR_BODIES }      from '@globals/data'
import { GET_FRAGMENTS }       from '@globals/data'
import { GET_SERVICES }        from '@globals/data'
import { GET_AVAILABLE_RADII } from '@globals/data'
import { getServerClient }     from '@globals/data/apollo'

export const runContactsPageServerQueries = async () => {
  const client = getServerClient()

  await client.query({ query: GET_CONTACTS })
  await client.query({ query: GET_NAVIGATION })
  await client.query({ query: GET_CAR_BODIES })
  await client.query({ query: GET_FRAGMENTS })
  await client.query({ query: GET_SERVICES })
  await client.query({ query: GET_AVAILABLE_RADII })
}
