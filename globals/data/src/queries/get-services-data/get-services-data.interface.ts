import type { GetServicesQuery as ServicesQueryDataType } from '@globals/data'

type ServicesType = Exclude<ServicesQueryDataType['services'], null | undefined>
export type ServicesDataType = ServicesType['nodes']
