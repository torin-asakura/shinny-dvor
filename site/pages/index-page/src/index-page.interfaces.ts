import type { SEOInt }                    from '@globals/data'
import type { DataInt }                   from '@globals/data'
import type { ServicesDataToReplaceType } from '@globals/data'

export interface SeoProps {
  ogCover: string
  SEO: SEOInt
}

export interface IndexPageClientProps {
  servicesDataToReplace: ServicesDataToReplaceType
  ogCover: string
  SEO: SEOInt
  data: DataInt
}

export type IndexPageProps = () => Promise<JSX.Element>

export type IndexPageServerProps = () => Promise<IndexPageClientProps>
