/* eslint-disable @typescript-eslint/sort-type-constituents */

import type { SEOInt }  from '@globals/data'
import type { DataInt } from '@globals/data'

export interface ContactsPageClientProps {
  ogCover: string
  SEO: SEOInt
  data: DataInt
  isYandexTurbo?: boolean
}

export interface ContactsPageProps {
  searchParams: Record<string, string | Array<string> | undefined>
}

export type ContactsPageInt = () => Promise<JSX.Element>

export type ContactsPageServerProps = () => Promise<ContactsPageClientProps>
