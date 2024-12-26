export interface ArticleProps {
  uri: string
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
