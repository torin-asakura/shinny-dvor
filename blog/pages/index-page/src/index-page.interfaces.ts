import type { ContactAddons } from '@blog/footer-fragment'
import type { Fragment }      from '@blog/footer-fragment'

// TODO interface
interface DataInt {
  contacts: ContactAddons[]
  posts: any
  navigation: any
  availableRadii: any
  fragments: Fragment[]
  carBodies: any
  services: any
}

export interface SEOInt {
  title?: string
  metaDesc?: string
}

export interface IndexPageProps {
  ogCover: string
  SEO: SEOInt
  data: DataInt
}

export type IndexPageServerProps = () => Promise<IndexPageProps>
