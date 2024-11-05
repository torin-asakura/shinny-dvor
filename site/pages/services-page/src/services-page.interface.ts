import type { AqsiDataType } from '@globals/data'

export type ServicesPageProps = () => Promise<JSX.Element>

export interface ServicesPageClientProps {
  serverQueryData: SeoProps
  aqsiServicesData: AqsiDataType
}

export type ServicesPageServerProps = () => Promise<ServicesPageClientProps>

// TODO any
export interface SeoProps {
  ogCover: string
  SEO: any
}
