import type { FC }               from 'react'

import type { SeoProps }         from './services-page.interface.js'

import { default as BaseHelmet } from 'react-helmet'
import React                     from 'react'

const Helmet = BaseHelmet as unknown as FC<any>

export const Seo: FC<SeoProps> = ({ ogCover, SEO }) => {
  const { title } = SEO

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          lang: 'ru',
          content: SEO.metaDesc,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          lang: 'ru',
          content: SEO.metaDesc,
        },
        {
          property: 'og:image',
          content: ogCover,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          lang: 'ru',
          content: SEO.metaDesc,
        },
      ]}
    />
  )
}
