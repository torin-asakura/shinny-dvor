import type { SEOInt }                from '@globals/data'
import type { DataInt }               from '@globals/data'
import type { FormattedAqsiDataType } from '@globals/data'

export interface ServicePageClientProps {
  aqsiServicesData: FormattedAqsiDataType
  SEO: SEOInt
  ogCover: string
  data: DataInt
}

type ParamsType = {
  uri: string
}

export type ServicePageProps = ({ params }: { params: ParamsType }) => Promise<JSX.Element>

export type ServicePageServerProps = ({
  params,
}: {
  params: ParamsType
}) => Promise<ServicePageClientProps>

export interface SeoProps {
  ogCover: string
  SEO: SEOInt
}
