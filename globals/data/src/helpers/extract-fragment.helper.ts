import type { FragmentsDataType }   from '@globals/data'
import type { WorkResultsDataType } from '@globals/data'
import type { ArrayElement }        from '@globals/data'
import type { NonNullable }         from '@globals/data'

type DataType = FragmentsDataType | WorkResultsDataType
type GenericKeyType<T> = keyof NonNullable<ArrayElement<T>>
// type KeyType = GenericKeyType<FragmentsDataType>

type GenericExtractFragment<T> = (key: GenericKeyType<T>, id: string, data: T) => any

type ExtractFragmentType =
  | GenericExtractFragment<FragmentsDataType>
  | GenericExtractFragment<WorkResultsDataType>

const extractFragment: ExtractFragmentType = (key, id, data) =>
  data?.filter((fragment) => {
    return fragment[key]?.fragmentId === id
  })[0]?.[key]

export { extractFragment }
