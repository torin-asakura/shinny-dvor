import { useSuspenseQuery }        from '@apollo/client'

import { GET_SITE_INDEX_PAGE_SEO } from './get-site-index-page-seo.query.js'

const getSiteIndexPageSeoData = () => {
  const { error, data } = useSuspenseQuery(GET_SITE_INDEX_PAGE_SEO)

  console.log('GET SITE INDEX PAGE RESULT:')

  console.log(error)
  console.log(data)

  return { error, data }
}

export { getSiteIndexPageSeoData }
