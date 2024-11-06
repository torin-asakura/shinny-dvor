import type { ServicesDataToReplaceType } from '@globals/data'

type ParamsType = {
  uri: string
}

export interface ServicePageClientProps {
  params: ParamsType
  servicesDataToReplace: ServicesDataToReplaceType
}

export type ServicePageProps = ({ params }: { params: ParamsType }) => Promise<JSX.Element>

export type ServicePageServerProps = ({
  params,
}: {
  params: ParamsType
}) => Promise<ServicePageClientProps>
