import type { SEOInt }  from '@globals/data'
import type { DataInt } from '@globals/data'

export interface SeoProps {
  ogCover: string
  SEO: SEOInt
}

export interface ContactsPageClientProps {
  ogCover: string
  SEO: SEOInt
  data: DataInt
}

export type ContactsPageProps = () => Promise<JSX.Element>

export type ContactsPageServerProps = () => Promise<ContactsPageClientProps>
