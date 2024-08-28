import type { PostPageProps } from './post-page.interfaces.js'

import React                  from 'react'

import { PostPageClient }     from './post-page.client.js'
import { PostPageServer }     from './post-page.server.js'

export const PostPage: PostPageProps = async ({ params }) => {
  const postPageData = await PostPageServer({ params })
  return <PostPageClient {...postPageData} />
}
