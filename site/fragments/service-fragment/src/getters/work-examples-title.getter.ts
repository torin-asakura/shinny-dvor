import { extractFragment } from '@globals/data'

export const getWorkExamplesTitle = (fragmentsData) => {
  const { title: workExamplesTitle } = extractFragment(
    'contentAddons',
    'work-examples-title',
    fragmentsData
  )

  return workExamplesTitle
}
