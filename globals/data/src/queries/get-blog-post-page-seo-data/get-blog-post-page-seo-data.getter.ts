import { useSuspenseQuery }       from '@apollo/client'

import { GET_BLOG_POST_PAGE_SEO } from '@globals/data'

const getBlogPostPageSeoData = ({ uri }: { uri: string }) => {
  const { data } = useSuspenseQuery(GET_BLOG_POST_PAGE_SEO, {
    variables: { uri },
  })

  if (data) {
    return {
      postBy: data.postBy,
    }
  }

  return { postBy: [] }
}

export { getBlogPostPageSeoData }
