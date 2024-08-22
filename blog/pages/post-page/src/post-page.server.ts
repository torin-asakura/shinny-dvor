import type { PostPageServerProps } from './post-page.interfaces.js'
import type { SEOInt }              from '@globals/data'

import { runGetBlogPostSeoQuery }   from '@globals/data'
import { runAvailableRadiiQuery }   from '@globals/data'
import { runCarBodiesQuery }        from '@globals/data'
import { runServicesQuery }         from '@globals/data'
import { runFragmentsQuery }        from '@globals/data'
import { runContactsQuery }         from '@globals/data'
import { runNavigationQuery }       from '@globals/data'
import { runPostQuery }             from '@globals/data'
import { runGetPreviewQuery }        from '@globals/data'

export const PostPageServer: PostPageServerProps = async ({ params }) => {
  let SEO: SEOInt

  const { uri } = params

  const seoData = await runGetBlogPostSeoQuery({ uri })
  const previewData = await runGetPreviewQuery()

  if (seoData) {
    SEO = seoData.postBy.seo
  } else {
    SEO = {}
  }

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
