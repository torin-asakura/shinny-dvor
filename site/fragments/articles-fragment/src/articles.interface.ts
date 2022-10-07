export interface Article {
  date: string
  id: string
  excerpt: string
  title: string
  featuredImage: {
    node: {
      altText: string
      mediaItemUrl: string
    }
  }
}

export interface Fragment {
  contentAddons: {
    title: string
    content: string
    role: string
    highlightedtext: string
  }
}

export interface ArticlesProps {
  postsData: Article[]
  fragmentsData: Fragment[]
}
