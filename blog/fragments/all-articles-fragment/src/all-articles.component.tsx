import type { FC }               from 'react'

import type { AllArticlesProps } from './all-articles.interface.js'

import { memo }                  from 'react'
import React                     from 'react'

import { Grid }                  from '@ui/layout'
import { Column }                from '@ui/layout'
import { Text }                  from '@ui/text'
import { extractFragment }       from '@globals/data'

import { Article }               from './article/index.js'

export const AllArticles: FC<AllArticlesProps> = memo(({
  fragmentsData,
  postsData,
}: AllArticlesProps) => {
  const titlePage = extractFragment('contentAddons', 'blog', fragmentsData).title

  return (
    <Column
      width='$fill'
      height='auto'
      maxWidth='$g1440'
      marginTop={104}
      paddingTop='$g32'
      paddingX={['$g20', '$g48', '$g80']}
      paddingBottom='$g80'
      gap={['$g24', '$g32', '$g48']}
      alignItems='center'
      justifySelf='center'
    >
      <Text width='$fill' fontWeight='$semiBold' fontSize='$extra'>
        {titlePage}
      </Text>
      <Grid
        width='$fill'
        gap='$g32'
        gridTemplateColumns={{
          mobile: 'repeat(1, 1fr)',
          tablet: 'repeat(2, 1fr)',
          desktop: 'repeat(3, 1fr)',
        }}
      >
        {postsData.map(({ uri, title, date, excerpt, featuredImage }) => (
          <Article
            key={`post-data-${title}`}
            uri={uri}
            title={title}
            date={date}
            excerpt={excerpt}
            featuredImage={featuredImage}
          />
        ))}
      </Grid>
    </Column>
  )
})
