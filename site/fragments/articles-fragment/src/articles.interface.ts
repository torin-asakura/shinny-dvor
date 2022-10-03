interface Article {
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

interface Blog {
  contentAddons: {
    title: string
    role: string
  }
}

export interface ArticlesProps {
  postsData: Article[]
  blogData: Blog[]
}
