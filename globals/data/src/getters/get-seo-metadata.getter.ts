/* eslint-disable */

// @ts-expect-error any
const getSeoMetadata = ({ ogCover, seoData }) => {
  const { title } = seoData
  const { metaDesc: description } = seoData

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogCover,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}

export { getSeoMetadata }
