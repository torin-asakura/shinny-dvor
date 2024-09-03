import { GET_SITE_INDEX_PAGE_SEO } from '@globals/data'
import { GET_PREVIEW }             from '@globals/data'
import { GET_CONTACTS }            from '@globals/data'
import { GET_SERVICES }            from '@globals/data'
import { GET_BLOG_POSTS }          from '@globals/data'
import { GET_WORK_RESULTS }        from '@globals/data'
import { GET_UI }                  from '@globals/data'
import { GET_FRAGMENTS }           from '@globals/data'
import { GET_NAVIGATION }          from '@globals/data'
import { GET_AVAILABLE_RADII }     from '@globals/data'
import { GET_CAR_BODIES }          from '@globals/data'
import { getServerClient }         from '@globals/data'

export const runIndexPageServerQueries = async () => {
  const client = getServerClient()

  // TODO context
  // добавить ревалидацию для запросов
  // const context = { headers: { cookie } }

  await client.query({ query: GET_SITE_INDEX_PAGE_SEO })
  await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  await client.query({ query: GET_CONTACTS })
  await client.query({ query: GET_SERVICES })
  await client.query({ query: GET_BLOG_POSTS })
  await client.query({ query: GET_WORK_RESULTS })
  await client.query({ query: GET_UI })
  await client.query({ query: GET_FRAGMENTS })
  await client.query({ query: GET_NAVIGATION })
  await client.query({ query: GET_AVAILABLE_RADII })
  await client.query({ query: GET_CAR_BODIES })

  return
}
