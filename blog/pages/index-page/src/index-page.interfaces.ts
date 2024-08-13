import type { SEOInt }  from '@globals/data'
import type { DataInt } from '@globals/data'

export interface IndexPageProps {
  ogCover: string
  SEO: SEOInt
  data: DataInt
}

export interface SeoProps {
  ogCover: string
  SEO: SEOInt
}

export type IndexPageServerProps = () => Promise<IndexPageProps>
