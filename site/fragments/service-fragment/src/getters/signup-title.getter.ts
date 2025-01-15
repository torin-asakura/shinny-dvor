import type { FragmentsDataType } from '@globals/data'

import { extractFragment }        from '@globals/data'

export const getSignUpTitle = (fragmentsData: FragmentsDataType): string => {
  const { title: signUp } = extractFragment('contentAddons', 'sign-up', fragmentsData)
  return signUp as string
}
