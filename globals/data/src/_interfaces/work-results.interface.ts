import type { WorkReultsQueryDataType } from '@globals/data'

type WorkReultsType = Exclude<WorkReultsQueryDataType['workResultItems'], null | undefined>
export type WorkResultsDataType = WorkReultsType['nodes']
