import React              from 'react'

import { Link }           from '@ui/link'

import { Carousel }       from '../carousel/index.js'
import { PreviewArticle } from '../preview-article/index.js'

export const ArticlesCarousel = ({ postsData, linkBlog }) => {
  return (
    <Carousel>
      {
        // @ts-expect-error null | undefined
        postsData.slice(0, 4).map(({ uri, title, date, excerpt, featuredImage }) => (
          <Link
            key={uri}
            href={uri}
            // @ts-expect-error not assignable
            width={['auto', 'auto', '100%']}
            path={`${linkBlog.contentAddons.content}/${uri}`}
          >
            <PreviewArticle
              title={title}
              date={date}
              excerpt={excerpt}
              featuredImage={featuredImage}
            />
          </Link>
        ))
      }
    </Carousel>
  )
}
