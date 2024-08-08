export interface ArticleProps {
  title: string
  excerpt: string
  date: string
  featuredImage: {
    node: {
      mediaItemUrl: string
      altText: string
    }
  }
}
