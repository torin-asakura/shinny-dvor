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

  const processQuery = async (queryData: Parameters<typeof client.query>[0]): Promise<void> => {
    const { error } = await client.query(queryData)

    if (error) {
      error.graphQLErrors.forEach((error) => {
        console.log(error.message)
        console.log(error.extensions)
        console.log(error.locations)
        console.log(error.path)
      })
      console.log(error.cause?.locations)
      console.log(error.cause?.path)
    }
  }

  await processQuery({ query: GET_FRAGMENTS })
  await processQuery({ query: GET_CONTACTS })
  await processQuery({ query: GET_NAVIGATION })
  await processQuery({ query: GET_AVAILABLE_RADII })

  await processQuery({ query: GET_BLOG_POST, variables: { uri } })

  await processQuery({ query: GET_CAR_BODIES })
  await processQuery({ query: GET_SERVICES })
}
