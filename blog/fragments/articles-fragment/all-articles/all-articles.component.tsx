import React                from 'react'
import { FC }               from 'react'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { extractFragment }  from '@globals/data'

import { AllArticlesProps } from './all-articles.interface'
import { Article }          from './article'

const AllArticles: FC<AllArticlesProps> = ({ fragmentsData, postsData }) => {
  const titlePage = extractFragment('contentAddons', 'blog', fragmentsData).title

  return (
    <Box maxWidth={['100%', '100%', '1440px']} height='auto' marginTop={[80, 80, 104]}>
      <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
      <Column width='100%' height='auto'>
        <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
        <Layout>
          <Text fontWeight='bold' fontSize='extra'>
            {titlePage}
          </Text>
        </Layout>
        <Row justifyContent='space-between' flexWrap='wrap'>
          {postsData.map(({ uri, title, date, excerpt, featuredImage }) => (
            <NextLink key={uri} path={uri}>
              <Article title={title} date={date} excerpt={excerpt} featuredImage={featuredImage} />
            </NextLink>
          ))}
        </Row>
        <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
    </Box>
  )
}

export { AllArticles }
