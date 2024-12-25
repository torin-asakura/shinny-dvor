import type { WorkExamplesType }     from '../hooks/index.js'
import type { PriceType }            from '../hooks/index.js'
import type { ImageType }            from '../hooks/index.js'
import type { WorkExamplesDataType } from '../hooks/index.js'

interface Props {
  workexamples: WorkExamplesType
  price: PriceType
}

const imageMock: ImageType = {
  __typename: 'MediaItem',
  altText: 'alt-text-mock',
  sourceUrl: 'source-url-mock',
}

export const getWorkExamplesData = ({ workexamples, price }: Props): WorkExamplesDataType => {
  const firstExample = workexamples?.firstexample
  const secondExample = workexamples?.secondexample

  const firsExampleData = {
    image: (firstExample?.image?.sourceUrl && firstExample?.image) || imageMock,
    title: firstExample?.title || '',
    price,
  }

  const secondExampleData = {
    image: (secondExample?.image?.sourceUrl && secondExample?.image) || imageMock,
    title: secondExample?.title || '',
    price,
  }

  const workExamplesData = [
    {
      ...firsExampleData,
    },
    {
      ...secondExampleData,
    },
  ]

  return workExamplesData as WorkExamplesDataType
}
