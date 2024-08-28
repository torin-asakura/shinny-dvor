import type { SEOInt }  from '@globals/data'
import type { DataInt } from '@globals/data'

export interface SeoProps {
  ogCover: string
  SEO: SEOInt
}

export interface IndexPageClientProps {
  ogCover: string
  SEO: SEOInt
  data: DataInt
}

export type IndexPageProps = () => Promise<JSX.Element>

export type IndexPageServerProps = () => Promise<IndexPageClientProps>
