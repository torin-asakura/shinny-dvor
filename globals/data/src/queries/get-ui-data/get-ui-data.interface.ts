import type { GetUiQuery as UiQueryDataType } from '@globals/data'

type UiType = Exclude<UiQueryDataType['uiItems'], null | undefined>
export type UiDataType = UiType['nodes']
