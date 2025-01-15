import type { PostPageProps }        from './post-page.interfaces.js'

import React                         from 'react'

import { GET_BLOG_POST }             from '@globals/data'
import { PreloadQuery }              from '@globals/data/apollo'

import { PostPageClient }            from './post-page.client.js'
import { runPostPageServerQuerires } from './hooks/index.js'

const PostPage: PostPageProps = async ({ params }) => {
  await runPostPageServerQuerires({ params })
  const { uri } = params
  return (
    <PreloadQuery
      query={GET_BLOG_POST}
      variables={{
        uri,
      }}
    >
      <PostPageClient params={params} />
    </PreloadQuery>
  )
}

export default PostPage
