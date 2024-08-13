import type { SEOInt }  from '@globals/data'
import type { DataInt } from '@globals/data'

export type ServicesPageProps = () => Promise<JSX.Element>

export interface ServicesPageClientProps {
  SEO: SEOInt
  ogCover: string
  data: DataInt
}

export type ServicesPageServerProps = () => Promise<ServicesPageClientProps>
