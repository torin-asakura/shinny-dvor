import { GET_PREVIEW }            from '@globals/data'
import { getClient }              from '@globals/data'
import { runAvailableRadiiQuery } from '@globals/data'
import { setCacheHeader }         from '@globals/data'
import { runCarBodiesQuery }      from '@globals/data'
import { runServicesQuery }       from '@globals/data'
import { runFragmentsQuery }      from '@globals/data'
import { runContactsQuery }       from '@globals/data'
import { runNavigationQuery }     from '@globals/data'
import { runPostsQuery }          from '@globals/data'

import { GET_BLOG_SEO }           from './queries'

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  let SEO

  setCacheHeader(res, 86400, 43200)

  const { data: seoData } = await client.query({
    query: GET_BLOG_SEO,
  })

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  const ogCover = previewData?.mediaItemBy.sourceUrl

  if (seoData) {
    SEO = seoData.pageBy.seo
  } else SEO = {}

  const queryPromises: Array<Promise<any>> = [
    runContactsQuery(),
    runPostsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runFragmentsQuery(),
    runCarBodiesQuery(),
    runServicesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { ogCover, SEO, data } }
}
