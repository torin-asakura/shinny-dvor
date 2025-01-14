interface FeaturedImageInt {
  node: {
    altText: string
    mediaItemUrl: string
  }
}

export interface Post {
  date: string
  uri: string
  excerpt: string
  title: string
  featuredImage: FeaturedImageInt
}

interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedText?: string
  }
}

export interface AllArticlesProps {
  fragmentsData: Array<Fragment>
  postsData: Array<Post>
}
