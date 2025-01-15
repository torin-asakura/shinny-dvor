/* eslint-disable @typescript-eslint/sort-type-constituents */

import type { SEOInt }                    from '@globals/data'
import type { DataInt }                   from '@globals/data'
import type { ServicesDataToReplaceType } from '@globals/data'

export interface SeoProps {
  ogCover: string
  SEO: SEOInt
}

export interface IndexPageProps {
  searchParams: Record<string, string | Array<string> | undefined>
}

export interface IndexPageClientProps {
  servicesDataToReplace: ServicesDataToReplaceType
  ogCover: string
  SEO: SEOInt
  data: DataInt
  isYandexTurbo?: boolean
}

export type IndexPageInt = () => Promise<JSX.Element>

export type IndexPageServerProps = () => Promise<IndexPageClientProps>
