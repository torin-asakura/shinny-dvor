import { useSuspenseQuery } from '@apollo/client'

import { GET_PAGE_SEO }     from '@globals/data'

const getPageSeoData = ({ uri }: { uri: string }) => {
  const { data: seoData } = useSuspenseQuery(GET_PAGE_SEO, {
    variables: { uri },
  })

  return seoData
}

export { getPageSeoData }
