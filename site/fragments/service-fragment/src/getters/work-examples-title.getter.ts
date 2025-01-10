import type { FragmentsDataType } from '@globals/data'

import { extractFragment }        from '@globals/data'

export const getWorkExamplesTitle = (fragmentsData: FragmentsDataType): string => {
  const { title: workExamplesTitle } = extractFragment(
    'contentAddons',
    'work-examples-title',
    fragmentsData
  )

  return workExamplesTitle as string
}
