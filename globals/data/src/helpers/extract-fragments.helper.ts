import type { ArrayElement } from '@globals/data'
import type { NonNullable }  from '@globals/data'

type GenericKeyType<T> = keyof NonNullable<ArrayElement<T>>

function extractFragments<DataType>(
  id: string,
  key: GenericKeyType<DataType>,
  fragmentsData: DataType
) {
  // @ts-expect-error prop not exist
  const filtredItems = fragmentsData?.filter((fragment) => {
    if (fragment) fragment[key]?.fragmentId === id
    return null
  })
  if (filtredItems) return filtredItems
  return []
}

export { extractFragments }
