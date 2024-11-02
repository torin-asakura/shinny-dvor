import type { FormattedAqsiDataType } from '@globals/data'

export type ServicesPageProps = () => Promise<JSX.Element>

export interface ServicesPageClientProps {
  serverQueryData: SeoProps
  aqsiServicesData: FormattedAqsiDataType
}

export type ServicesPageServerProps = () => Promise<ServicesPageClientProps>

// TODO any
export interface SeoProps {
  ogCover: string
  SEO: any
}
