import type { ServicesDataToReplaceType } from '@globals/data'

export type ServicesPageProps = () => Promise<JSX.Element>

export interface ServicesPageClientProps {
  serverQueryData: SeoProps
  servicesDataToReplace: ServicesDataToReplaceType
}

export type ServicesPageServerProps = () => Promise<ServicesPageClientProps>

export interface SeoProps {
  ogCover: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SEO: any
}
