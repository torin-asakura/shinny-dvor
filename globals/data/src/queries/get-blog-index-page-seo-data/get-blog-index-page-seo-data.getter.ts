import { useSuspenseQuery }        from '@apollo/client'

import { GET_BLOG_INDEX_PAGE_SEO } from '@globals/data'

const getBlogIndexPageSeoData = () => {
  const { data: seoData } = useSuspenseQuery(GET_BLOG_INDEX_PAGE_SEO)

  return seoData
}

export { getBlogIndexPageSeoData }
