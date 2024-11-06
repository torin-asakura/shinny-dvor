import type { ServicesDataToReplaceType } from '@globals/data'

export type ServicesPageProps = () => Promise<JSX.Element>

export interface ServicesPageClientProps {
  serverQueryData: SeoProps
  servicesDataToReplace: ServicesDataToReplaceType
}

export type ServicesPageServerProps = () => Promise<ServicesPageClientProps>

// TODO any
export interface SeoProps {
  ogCover: string
  SEO: any
}
