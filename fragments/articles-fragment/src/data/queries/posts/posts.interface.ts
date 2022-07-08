export interface Post {
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
