export interface Post {
  date: string
  uri: string
  excerpt: string
  title: string
  featuredImage: {
    node: {
      altText: string
      mediaItemUrl: string
    }
  }
}

interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedText: string
  }
}

export interface AllArticlesProps {
  fragmentsData: Fragment[]
  postsData: Post[]
}
