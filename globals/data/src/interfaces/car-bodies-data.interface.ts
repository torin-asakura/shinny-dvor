import type { CarBodiesQueryDataType } from '@globals/data'

type CarBodiesType = Exclude<CarBodiesQueryDataType['carBodyItems'], null | undefined>
export type CarBodiesDataType = CarBodiesType['nodes']
