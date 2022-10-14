export interface PreviewArticleProps {
  id: string
  title: string
  date: string
  excerpt: string
  featuredImage: {
    node: {
      mediaItemUrl: string
      altText: string
    }
  }
}
