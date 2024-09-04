import { GET_CONTACTS }               from '@globals/data'
import { GET_NAVIGATION }             from '@globals/data'
import { GET_CAR_BODIES }             from '@globals/data'
import { GET_FRAGMENTS }              from '@globals/data'
import { GET_SERVICES }               from '@globals/data'
import { GET_AVAILABLE_RADII }        from '@globals/data'
import { GET_SITE_CONTACTS_PAGE_SEO } from '@globals/data'
import { GET_PREVIEW }                from '@globals/data'
import { getServerClient }            from '@globals/data'

export const runContactsPageServerQueries = async () => {
  const client = getServerClient()

  const {
    data: {
      pageBy: { seo: seoData },
    },
  } = await client.query({ query: GET_SITE_CONTACTS_PAGE_SEO })

  const {
    data: {
      mediaItemBy: { sourceUrl: ogCover },
    },
  } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  await client.query({ query: GET_CONTACTS })
  await client.query({ query: GET_NAVIGATION })
  await client.query({ query: GET_CAR_BODIES })
  await client.query({ query: GET_FRAGMENTS })
  await client.query({ query: GET_SERVICES })
  await client.query({ query: GET_AVAILABLE_RADII })

  return { ogCover, seoData }
}
