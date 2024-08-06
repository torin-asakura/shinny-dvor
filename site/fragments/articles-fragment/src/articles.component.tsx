import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
// TODO it package uses old next router variant
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { extractFragment }  from '@globals/data'
import { extractFragments } from '@globals/data'

import { ArticlesProps }    from './articles.interface'
import { Carousel }         from './carousel'
import { PreviewArticle }   from './preview-article'

const Articles: FC<ArticlesProps> = forwardRef((
  { postsData, fragmentsData, navigationData },
  ref: any
) => {
  const latestPublications = extractFragment(
    'contentAddons',
    'latest-publications',
    fragmentsData
  ).title

  const navigationItems = extractFragments('nav-item', 'contentAddons', navigationData)
  const linkBlog = navigationItems.filter(({ contentAddons }) => contentAddons.title === 'Блог')[0]

  return (
    <Box
      width='100%'
      height={[569, 569, 693]}
      backgroundColor='fillGray'
      justifyContent='center'
      ref={ref}
    >
      <Box width='100%' maxWidth={['100%', '100%', 1440]} justifyContent='space-between'>
        <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
        <Column fill overflow='hidden'>
          <Layout flexBasis={[64, 64, 100]} />
          <Layout>
            <Text
              lineHeight=''
              fontWeight='medium'
              fontSize={['extraLarge', 'extraLarge', 'giant']}
            >
              {latestPublications}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 48]} />
          <Row overflow='hidden'>
            <Carousel>
              {postsData.slice(0, 3).map(({ uri, title, date, excerpt, featuredImage }) => (
                <NextLink key={uri} path={`${linkBlog.contentAddons.content}/${uri}`}>
                  <PreviewArticle
                    title={title}
                    date={date}
                    excerpt={excerpt}
                    featuredImage={featuredImage}
                  />
                </NextLink>
              ))}
            </Carousel>
          </Row>
          <Layout flexBasis={[64, 64, 100]} />
        </Column>
        <Layout flexBasis={[0, 20, 80]} flexShrink={0} />
      </Box>
    </Box>
  )
})

export { Articles }
