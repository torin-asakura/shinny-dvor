interface FeaturedImageInt {
  node: ImageInt
}

interface ContentAddonsInt {
  image: ImageInt
}

interface ImageInt {
  mediaItemUrl: string
  altText: string
}

interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedText: string
  }
}

interface Post {
  postId: number
  content: string
  title: string
  date: string
  viewCount: number
  featuredImage: FeaturedImageInt
  contentAddons: ContentAddonsInt
}

export interface ArticleProps {
  fragmentsData: Array<Fragment>
  postData: Post
}
