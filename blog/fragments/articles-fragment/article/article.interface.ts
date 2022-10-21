interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedtext: string
  }
}

interface Post {
  postId: number
  content: string
  title: string
  date: string
  viewCount: number
  featuredImage: {
    node: {
      mediaItemUrl: string
      altText: string
    }
  }
}

export interface ArticleProps {
  fragmentsData: Fragment[]
  postData: Post
}
