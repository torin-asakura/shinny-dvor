export interface PreviewArticleProps {
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
