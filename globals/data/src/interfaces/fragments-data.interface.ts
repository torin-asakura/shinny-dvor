import type { FragmentsQueryDataType } from '@globals/data'
import type { ArrayElement }           from '@globals/data'

export type FragmentsType = Exclude<FragmentsQueryDataType['fragments'], null | undefined>
export type FragmentsDataType = FragmentsType['nodes']
