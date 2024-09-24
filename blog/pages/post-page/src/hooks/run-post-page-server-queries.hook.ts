import type { PostPageServerProps } from '../post-page.interfaces.js'

import { GET_FRAGMENTS }            from '@globals/data'
import { GET_CONTACTS }             from '@globals/data'
import { GET_NAVIGATION }           from '@globals/data'
import { GET_AVAILABLE_RADII }      from '@globals/data'
import { GET_BLOG_POST }            from '@globals/data'
import { GET_CAR_BODIES }           from '@globals/data'
import { GET_SERVICES }             from '@globals/data'
import { getServerClient }          from '@globals/data/apollo'

// @ts-expect-error notAssignable
export const runPostPageServerQuerires: PostPageServerProps = async ({ params }) => {
  const client = getServerClient()
  const { uri } = params

  await client.query({ query: GET_FRAGMENTS })
  await client.query({ query: GET_CONTACTS })
  await client.query({ query: GET_NAVIGATION })
  await client.query({ query: GET_AVAILABLE_RADII })
  await client.query({ query: GET_BLOG_POST, variables: { uri } })
  await client.query({ query: GET_CAR_BODIES })
  await client.query({ query: GET_SERVICES })
}
