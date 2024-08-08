import React              from 'react'
import { FC }             from 'react'

import { PostPageClient } from './post-page.client.js'
import { PostPageServer } from './post-page.server.js'

// TODO interface
const PostPage: FC<PostPageProps> = async ({ params }) => {
  const postPageData = await PostPageServer({ params })
  return <PostPageClient {...postPageData} />
}

export default PostPage
