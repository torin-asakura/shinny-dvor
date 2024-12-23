import type { AllArticlesProps } from './all-articles.interface.js'
import type { FC }               from 'react'

import React                     from 'react'
import { memo }                  from 'react'

import { Box }                   from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Column }                from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Text }                  from '@ui/text'
import { extractFragment }       from '@globals/data'

import { Article }               from './article/index.js'

export const AllArticles: FC<AllArticlesProps> = memo(({
  fragmentsData,
  postsData,
}: AllArticlesProps) => {
  const titlePage = extractFragment('contentAddons', 'blog', fragmentsData).title

  return (
    <Box width='$fill' height='auto'>
      <Column width='100%' height='auto'>
        <Text fontWeight='$semiBold' fontSize='$extra'>
          {titlePage}
        </Text>
        <Row flexWrap='wrap'>
          {postsData.map(({ uri, title, date, excerpt, featuredImage }) => (
            <Article
              uri={uri}
              title={title}
              date={date}
              excerpt={excerpt}
              featuredImage={featuredImage}
            />
          ))}
        </Row>
      </Column>
    </Box>
  )
})
