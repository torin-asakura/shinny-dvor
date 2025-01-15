import type { FragmentsDataType } from '@globals/data'

import { extractFragment }        from '@globals/data'

export const goBackTitle = (fragmentsData: FragmentsDataType): string => {
  const { title: goBack } = extractFragment('contentAddons', 'all-services', fragmentsData)
  return goBack as string
}
