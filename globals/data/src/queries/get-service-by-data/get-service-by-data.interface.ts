import type { GetServiceByQuery as ServiceByQueryDataType } from '@globals/data'

type FragmentsType = Exclude<ServiceByQueryDataType['serviceBy'], null | undefined>
type ServicesParamsType = Exclude<FragmentsType['servicesParams'], null | undefined>
export type ServiceDataType = Omit<FragmentsType, 'servicesParams'> & {
  servicesParams: ServicesParamsType
}
