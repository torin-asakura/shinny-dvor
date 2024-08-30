import type { DataInt }             from '@globals/data'
import type { SEOInt }              from '@globals/data'

import type { PostPageServerProps } from './post-page.interfaces.js'

import { getAvailableRadiiData }    from '@globals/data'
import { getCarBodiesData }         from '@globals/data'
import { getServicesData }          from '@globals/data'
import { getFragmentsData }         from '@globals/data'
import { getContactsData }          from '@globals/data'
import { getNavigationData }        from '@globals/data'
import { getPostData }              from '@globals/data'
import { getSchemaData }            from '@globals/data'
import { getRadiiData }             from '@globals/data'
import { getBlogPostPageSeoData }   from '@globals/data'
import { getPagePreviewData }       from '@globals/data'

// @ts-expect-error type missing
export const PostPageServer: PostPageServerProps = async ({ params }) => {
  let SEO: SEOInt

  const { uri } = params

  // TODO move it to blogindespagegetseodata getter
  const seoData = await getBlogPostPageSeoData({ uri })
  const previewData = await getPagePreviewData()

  if (seoData) {
    SEO = seoData.postBy.seo
  } else {
    SEO = {}
  }

  const ogCover = previewData?.mediaItemBy.sourceUrl

  const { schema } = await getSchemaData()
  const radiiData = await getRadiiData(schema)

  const queryPromises = [
    getFragmentsData(),
    getContactsData(),
    getNavigationData(),
    getAvailableRadiiData(),
    getPostData({ uri }),
    getCarBodiesData(),
    getServicesData(),
  ]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { ogCover, SEO, data }
}
