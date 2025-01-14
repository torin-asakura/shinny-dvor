import type { SEOInt }  from '@globals/data'
import type { DataInt } from '@globals/data'

export interface ContactsPageClientProps {
  ogCover: string
  SEO: SEOInt
  data: DataInt
  isYandexTurbo?: boolean
}

export interface ContactsPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export type ContactsPageInt = () => Promise<JSX.Element>

export type ContactsPageServerProps = () => Promise<ContactsPageClientProps>
