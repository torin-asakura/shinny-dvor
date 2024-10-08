/* eslint-disable */

import { useSuspenseQuery }       from '@apollo/client'

import { GET_BLOG_POST_PAGE_SEO } from '@globals/data'

const getBlogPostPageSeoData = ({ uri }: { uri: string }) => {
  const { data } = useSuspenseQuery(GET_BLOG_POST_PAGE_SEO, {
    variables: { uri },
  })

  if (data) {
    return {
      // @ts-expect-error not exist
      postBy: data.postBy,
    }
  }

  return { postBy: [] }
}

export { getBlogPostPageSeoData }
