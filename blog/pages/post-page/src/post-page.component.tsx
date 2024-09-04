import type { PostPageProps }        from './post-page.interfaces.js'

import React                         from 'react'

import { PostPageClient }            from './post-page.client.js'
import { runPostPageServerQuerires } from './hooks/index.js'

export const PostPage: PostPageProps = async ({ params }) => {
  const serverQueryData = await runPostPageServerQuerires({ params })
  // @ts-expect-error not assignable
  return <PostPageClient params={params} serverQueryData={serverQueryData} />
}
