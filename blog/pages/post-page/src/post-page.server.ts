import type { PostPageServerProps } from './post-page.interfaces.js'
import type { SEOInt }              from '@globals/data'

import { GET_PREVIEW }              from '@globals/data'
import { getClient }                from '@globals/data'
import { runAvailableRadiiQuery }   from '@globals/data'
import { runCarBodiesQuery }        from '@globals/data'
import { runServicesQuery }         from '@globals/data'
import { runFragmentsQuery }        from '@globals/data'
import { runContactsQuery }         from '@globals/data'
import { runNavigationQuery }       from '@globals/data'

import { GET_POST_SEO }             from './queries/index.js'
import { runPostQuery }             from './queries/index.js'

export const PostPageServer: PostPageServerProps = async ({ params }) => {
  const client = getClient()

  let SEO: SEOInt

  const { uri } = params

  const { data: seoData } = await client.query({
    query: GET_POST_SEO,
    variables: { uri },
  })

  if (seoData) {
    SEO = seoData.postBy.seo
  } else SEO = {}

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  const ogCover = previewData?.mediaItemBy.sourceUrl

  const queryPromises: Array<Promise<any>> = [
    runContactsQuery(),
    runNavigationQuery(),
    runAvailableRadiiQuery(),
    runFragmentsQuery(),
    runPostQuery(uri),
    runCarBodiesQuery(),
    runServicesQuery(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { ogCover, SEO, data }
}
