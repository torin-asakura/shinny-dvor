/* eslint-disable */

import type { ArticlesProps } from './articles.interface.js'
import type { FC }            from 'react'

import React                  from 'react'
import { forwardRef }         from 'react'

import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Text }               from '@ui/text'
import { extractFragment }    from '@globals/data'
import { extractFragments }   from '@globals/data'

import { ArticlesCarousel }   from './articles-carousel/index.js'

export const Articles: FC<ArticlesProps> = forwardRef((
  { postsData, fragmentsData, navigationData },
  ref: any
) => {
  const latestPublications = extractFragment(
    'contentAddons',
    'latest-publications',
    fragmentsData
  ).title

  const navigationItems = extractFragments('nav-item', 'contentAddons', navigationData)
  // @ts-expect-error any type
  const linkBlog = navigationItems.filter(({ contentAddons }) => contentAddons.title === 'Блог')[0]

  return (
    <Box
      ref={ref}
      width='100%'
      height={{ mobile: '569px', tablet: '569px', desktop: '693px' }}
      backgroundColor='$fillGray'
      justifyContent='center'
    >
      <Box
        width='100%'
        maxWidth={{ mobile: '100%', tablet: '100%', desktop: '1440px' }}
        justifyContent='space-between'
      >
        <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '80px' }} flexShrink={0} />
        <Column overflow='hidden'>
          <Layout flexBasis={{ mobile: '64px', tablet: '64px', desktop: '100px' }} />
          <Layout>
            <Text
              lineHeight=''
              fontWeight='medium'
              fontSize={{ mobile: 'extraLarge', tablet: 'extraLarge', desktop: 'giant' }}
            >
              {latestPublications}
            </Text>
          </Layout>
          <Layout flexBasis={{ mobile: '32px', tablet: '32px', desktop: '48px' }} />
          <Row overflow='hidden'>
            <ArticlesCarousel postsData={postsData} linkBlog={linkBlog} />
          </Row>
          <Layout flexBasis={{ mobile: '64px', tablet: '64px', desktop: '100px' }} />
        </Column>
        <Layout flexBasis={{ mobile: 0, tablet: '20px', desktop: '80px' }} flexShrink={0} />
      </Box>
    </Box>
  )
})
