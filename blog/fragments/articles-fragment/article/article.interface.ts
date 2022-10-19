interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedtext: string
  }
}

interface Post {
  content: string
  title: string
  date: string
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
