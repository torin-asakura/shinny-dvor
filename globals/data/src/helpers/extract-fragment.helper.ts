import type { ArrayElement } from '@globals/data'
import type { NonNullable }  from '@globals/data'

type GenericKeyType<T> = keyof NonNullable<ArrayElement<T>>

function extractFragment<DataType>(key: GenericKeyType<DataType>, id: string, data: DataType) {
  // @ts-expect-error prop not exist
  const filtredItems = data?.filter((fragment) => {
    if (fragment) return fragment[key]?.fragmentId === id
    return null
  })
  if (filtredItems) return filtredItems[0]?.[key]
  return null
}

export { extractFragment }
