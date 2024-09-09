import type { PostPageProps }        from './post-page.interfaces.js'

import React                         from 'react'

import { PreloadQuery }              from '@globals/data'
import { GET_BLOG_POST }             from '@globals/data'

import { PostPageClient }            from './post-page.client.js'
import { runPostPageServerQuerires } from './hooks/index.js'

const PostPage: PostPageProps = async ({ params }) => {
  const serverQueryData = await runPostPageServerQuerires({ params })
  const { uri } = params
  return (
    <PreloadQuery
      query={GET_BLOG_POST}
      variables={{
        uri,
      }}
    >
      <PostPageClient
        // @ts-expect-error not assignable
        params={params}
        serverQueryData={serverQueryData}
      />
    </PreloadQuery>
  )
}

export default PostPage
